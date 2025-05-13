const DoctorPlans = [
   
    {
        name:'Free',
        message:'Suitable to all Subscribers',
        price:'0.00',
        duration:'month',
        active:true,
        commission:30,
        offers:[
            'Access to 20 Patients per month',
            'Regular Profile Listing',
            'Access to 50 AI Responses.',
            'Video Consultation and Chat',
            'Access to Support'
        ]
    },
    {
        name:'Basic',
        message:'Suitable to all Basic Plan Subscribers',
        price:'16,000',
        duration:'month',
        active:false,
        commission:25,
        offers:[
            'Access to 50 Patients per month.',
            'Regular Profile Listing.',
            'Access to 200 AI Responses.',
            'Video Consultation and Chat.',
            'Access to Shop/Purchase.',
            'Suitable for Individual accounts only.',
            'Access to Standard support.'
        ]
    },

    {
        name:'Professional',
        message:'Suitable to all Professional Plan Subscribers',
        price:'100,000',
        duration:'month',
        active:false,
        commission:20,
        offers:[
            'Access to 100 Patients per month.',
            'Top Profile Listing.',
            'Access to 400 AI Responses.',
            'Video Consultation and Chat.',
            'Access to Priority Support.'
        ]
    },

    {
        name:'Premium',
        message:'Suitable to all Premium Subscribers',
        price:'200,000',
        duration:'month',
        active:false,
        commission:15,
        offers:[
            'Access to Unlimited Patients per month.',
            'Top Profile Listing.',
            'Access to Unlimited AI Responses.',
            'Video Consultation and Chat.',
            'Access to Priority Support.',
           
        ]
    },
    // {
    //     name:'Proffessional',
    //     message:'Subscribe to all Proffessional Plan Subscribers',
    //     price:'100,000.00',
    //     duration:'month',
    //     active:false,
    //     commission:'',
    //     offers:[
    //         'Access to 100 Patients per month.',
    //         'Top Profile Listing',
    //         'Access to 400 AI responses',
    //         'Video Consultations and Chat.',
    //         'Access to Priority Support.'
    //     ]
    // },
]

export {DoctorPlans}