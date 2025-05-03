const DoctorPlans = [
    {
        name:'Premium',
        message:'Subscribe to all Premium Subscribers',
        price:'200,000.00',
        duration:'year',
        active:true,
        commission:'15% Commission per consultation',
        offers:[
            'Access to Unlimited Patients per Month.',
            'Top Profile Listing',
            'Access to unlimited AI responses',
            'Video Consultations and Chat.',
            'Access to Priority Support.'
        ]
    },
    {
        name:'Free',
        message:'Subscribe to all Free Plan Subscribers',
        price:'0.00',
        duration:'month',
        active:false,
        commission:'30% Commission per consultation',
        offers:[
            'Access to 20 Patients per month.',
            'Regular Profile Listing',
            'Access to 50 AI responses',
            'Video Consultations and Chat.',
            'Access to Support.'
        ]
    },
    {
        name:'Basic',
        message:'Subscribe to all Basic Plan Subscribers',
        price:'60,000.00',
        duration:'month',
        active:false,
        commission:'25% Commission per consultation',
        offers:[
            'Access to 50 Patients per month.',
            'Regular Profile Listing',
            'Access to 200 AI responses',
            'Video Consultations and Chat.',
            'Access to Standard Support.'
        ]
    },
    {
        name:'Proffessional',
        message:'Subscribe to all Proffessional Plan Subscribers',
        price:'100,000.00',
        duration:'month',
        active:false,
        commission:'',
        offers:[
            'Access to 100 Patients per month.',
            'Top Profile Listing',
            'Access to 400 AI responses',
            'Video Consultations and Chat.',
            'Access to Priority Support.'
        ]
    },
]

export {DoctorPlans}