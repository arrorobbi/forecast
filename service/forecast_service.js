const { Sequelize, Forecast } = require('../models')
const {Op} = require('@sequelize/core')

const getAll = async(none)=>{
    const payment = await Forecast.findAndCountAll()
    return payment
}

const lookup = async(date)=>{
    const payment = Forecast.findAll({where:{date:date}})
    return payment
}

const getbyId = async(params)=>{
    const payment = Payment.findOne({where:{id:params}})
    return payment
}

const create = async (payload) => {
    const { ...forecast } = payload
    const create = await Forecast.create({
        ...forecast
    });

    return create;
}
const update = async (PaymentId, payload) => {
    const result = await Payment.update(payload, {
        where: {
            id: PaymentId,
        },
        individualHooks: true
    })
    return result
};

const destroy = async (PaymentId) => {
    const result = await Payment.destroy({
        where: {
            id: PaymentId,
        },
        individualHooks: true
    })
    return result
};
module.exports=
{
    lookup,
    getAll,
    create,
    update,
    destroy,
    getbyId
}