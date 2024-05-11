const forecast_services = require("../service/forecast_service")

const index = async (req, res, next) => {
    try {
        //passing getAll service
        const {firstDay, today} = req.params
        let data 
        if(firstDay != undefined && today != undefined){
            
            data = await forecast_services.getByParams(firstDay, today)
        }

        console.log(req.params);
        return res.status(200).json({
            status: 200,    
            message: 'Request Success',
            payload: data
        })

    } catch (error) {
        if (error.message) {
            next({status: 400, message: error.message, data: {}})
        }
        next(error)
    }
}

const dashboard = async (req, res, next) => {
    try {
        //passing getAll service
        const data = await forecast_services.dashboard()

        return res.status(200).json({
            status: 200,    
            message: 'Request Success',
            payload: data
        })

    } catch (error) {
        if (error.message) {
            next({status: 400, message: error.message, data: {}})
        }
        next(error)
    }
}


const weekly = async (req, res, next) => {
    try {
        //passing getAll service
        const week = req.params.week
        const data = await forecast_services.getbyWeek(week)
        let totalRTS = 0 

        data.map(data => {
            totalRTS += data.dataValues.RTS
        })

        return res.status(200).json({
            status: 200,    
            message: 'Request Success',
            payload: data,
            totalRTS: totalRTS
        })

    } catch (error) {
        if (error.message) {
            next({status: 400, message: error.message, data: {}})
        }
        next(error)
    }
}

const week = (data) =>{
    const date = new Date(data);
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
    const result = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
    return result
  }

const create = async (req, res, next) => {
    try {
        const { RTS, actual_forecast} = req.body
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        const upper = await get_one()
        let manpower = 0
        const forecast = ((RTS * upper) / 100) + RTS
        const actual_upper = ((actual_forecast - RTS) / RTS) * 100

        if(forecast >= 30000){
            let forecastDW = forecast - 30000
            manpower = forecastDW / 4900
        }

        const payload = {
            date: today.setHours(0, 0, 0, 0),
            week: week(today.setHours(0, 0, 0, 0)),
            RTS: RTS,
            upper: upper,
            forecast: Math.round(forecast),
            actual_forecast: actual_forecast,
            actual_upper: Math.round(actual_upper),
            manpower: manpower.toFixed(2)
        }
        const result = await forecast_services.create(payload)
        return res.status(201).json({
            message: "Success",
            payload: result
        });
        
    } catch (err) {
        console.error(err);
        next(err);
    }
};

const get_one = async () => {
    try {

        let actual_upper = []
        let average = 0
        let last_date = []

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        for( let count = 0 ; count < 3 ; count++){
            // Calculate the date for last week
            if(count === 0){
                

                const lastWeekDate = new Date(today);
                const date = lastWeekDate.setDate(today.getDate() - 7);
                last_date.push(new Date(date))
            }
            const last_week = new Date(last_date[count]);
            const date_before = new Date(last_week)
            const decrease = date_before.setDate(last_week.getDate() - 7);
            last_date.push(new Date(decrease))
        }

        for(date of last_date){
            const lookup = await forecast_services.lookup(date)
            
            for(upper of lookup){
                actual_upper.push(upper.dataValues.actual_upper)
            }
        }

        console.log(actual_upper);
        for(data of actual_upper){
            const float =  Math.round(data);
            average = average + float
        }



        return average / 4
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    index,
    create,
    get_one,
    week,
    weekly,
    dashboard
}