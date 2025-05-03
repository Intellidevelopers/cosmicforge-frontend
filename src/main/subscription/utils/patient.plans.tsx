const patientPlans = [
    {
        name:'Premium',
        message:'Subscribe to all Premium Subscribers',
        price:'60,000.00',
        duration:'year',
        active:true,
        offers:[
            'Access to Top Doctors.',
            'Access to Shop/Purchase.',
            'Access to Unlimited ChatBot Responses',
            'Access to Unlimited Diagnostic Requests',
            'Access to all Department Specialist',
            'Suitable for family account (2 Adults and 2 or mor Children)',
            'Video Consultations and Chat.',
            // 'Access to Reschedule Appointment.',
            'Access to First Aid Assistance.',
            'Access to Priority Support.'
        ]
    },
    {
        name:'Free',
        message:'Subscribe to all Subscribers',
        price:'0.00',
        duration:'month',
        active:false,
        offers:[
            'Access to RChat Only.',
            'Access to 10 AI ChatBot Responses',
            'Access to General & Emergency Specialist only',
            'Access to Shop/Purchase.',
            'Access to Support.'
        ]
    },
    {
        name:'Basic',
        message:'Subscribe to all Basic Plan Subscribers',
        price:'16,000.00',
        duration:'month',
        active:false,
        offers:[
            // 'Access to Top Doctors.',
            'Access to 20 AI ChatBot Responses',
            'Access to 20 AI Diagnostic Requests',
            'Access to all Department Specialist',
            'Access to Shop/Purchase.',
            'Video Consultations and Chat.',
            'Suitable for individual Accounts Only',
            'Access to Standard Support.'
        ]
    },
    {
        name:'Medium',
        message:'Subscribe to all Medium Plan Subscribers',
        price:'30,000.00',
        duration:'month',
        active:false,
        offers:[
            'Video Consultations and Chat.',
            'Access to 100 AI ChatBot Responses',
            'Access to 50 AI Diagnostic Requests',
            'Access to all Department Specialist',
            'Access to Shop/Purchase.',
            'Suitable for family account (2 Adults & 2 or more Children)',
            'Access to First Aid Assistance.',
            'Access to Standard Support.'
        ]
    },
]

export {patientPlans}