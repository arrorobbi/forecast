const forecast_services = require("../service/forecast_service")
const index = async (req, res, next) => {
    try {
        //passing getAll service
        const data = await forecast_services.getAll()

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

const create = async (req, res, next) => {
    try {
        const { RTS, actual_forecast} = req.body
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        const upper = await get_one()
        const forecast = ((RTS * upper) / 100) + RTS
        const payload = {
            date: today,
            RTS: RTS,
            upper: upper,
            forecast:forecast,
            actual_forecast: actual_forecast,
            actual_upper: ((actual_forecast - RTS) / RTS) * 100
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
            actual_upper.push(lookup[0].dataValues.actual_upper)
        }

        for(data of actual_upper){
            const roundedNumber = data.toFixed(2);
            const float = parseFloat(roundedNumber);
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
    get_one
}