const { Sequelize, Forecast } = require('../models')
const {Op} = require('@sequelize/core')

const getByParams = async(firstDay, today)=>{
    const forecast = await Forecast.findAndCountAll({
        where: {
            date: { [Op.between]: [firstDay, today] },
          }
    })
    return forecast
}

const getAll = async(firstDay, today)=>{
    const forecast = await Forecast.findAndCountAll({
        where: {
            date: { [Op.between]: [firstDay, today] },
          }
    })
    return forecast
}


const dashboard = async(none)=>{
    const forecast = await Forecast.findAndCountAll({
         limit: 30,
         order: [
            ['date', 'DESC']
          ]
        })
    return forecast
}

const lookup = async(date)=>{
    const forecast = Forecast.findAll({where:{date:date}})
    return forecast
}

const create = async (payload) => {
    const { ...forecast } = payload
    const create = await Forecast.create({
        ...forecast
    });

    return create;
}
const getbyWeek = async(week)=>{
    const forecast = Forecast.findAll({where:{week:week}})
    return forecast
}

const getbyId = async(params)=>{
    const forecast = Forecast.findOne({where:{id:params}})
    return forecast
}

// const update = async (PaymentId, payload) => {
//     const result = await Payment.update(payload, {
//         where: {
//             id: PaymentId,
//         },
//         individualHooks: true
//     })
//     return result
// };

// const destroy = async (PaymentId) => {
//     const result = await Payment.destroy({
//         where: {
//             id: PaymentId,
//         },
//         individualHooks: true
//     })
//     return result
// };
module.exports=
{
    lookup,
    getAll,
    create,
    getbyWeek,
    dashboard,
    getByParams,
    getbyId
}