const patientPlans = [
    {
        name:'Premium',
        message:'Subscrie to all Premium Subscribers',
        price:'0.00',
        duration:'year',
        active:true,
        offers:[
            'Access to Top Doctors.',
            'Access to Shop/Purchase.',
            'AI Diagnosis.',
            'Video Consultations and Chat.',
            'Access to Reschedule Appointment.',
            'Access to First Aid Assistance.',
            'Access to Priority Support.'
        ]
    },
    {
        name:'Free',
        message:'Subscrie to all Subscribers',
        price:'0.00',
        duration:'month',
        active:false,
        offers:[
            'Access to Regular Doctors.',
            'Access to Shop/Purchase.',
            'Access to Support.'
        ]
    },
    {
        name:'Basic',
        message:'Subscrie to all Basic Plan Subscribers',
        price:'0.00',
        duration:'month',
        active:false,
        offers:[
            'Access to Top Doctors.',
            'Access to Shop/Purchase.',
            'AI Diagnosis.',
            'Video Consultations and Chat.',
            'Access to Standard Support.'
        ]
    },
]

export {patientPlans}