const patientPlans = [

    {
        name:'Free',
        message:'Suitable to all  Subscribers',
        price:'0.00',
        duration:'month',
        active:false,
        commission:undefined,
        offers:[
            'Access to Chat only.',
            'Access to 10 AI Chatbot Responses.',
            'Access to General & Emergency Specialist only.',
            'Access to Shop/Purchase',
            'Access to Support'
        ]
    },
    {
        name:'Basic',
        message:'Suitable to all Basic Plan Subscribers',
        price:'16,000',
        duration:'month',
        active:false,
        commission:undefined,
        offers:[
            'Video Consultations and chat.',
            'Access 50 AI Chatbot Responses.',
            'Access 20 AI Diagnostic Requests.',
            'Access to all Department Specialist.',
            'Access to Shop/Purchase.',
            'Suitable for Individual accounts only.',
            'Access to Standard support.'
        ]
    },
    {
        name:'Medium',
        message:'Subscrie to all Medium Subscribers',
        price:'30,000',
        duration:'year',
        active:true,
        commission:undefined,
        offers:[
            'Video Consultation and chat.',
            'Access to 100 AI Chatbot Response.',
            'Access to 50 AI Chatbot Requests.',
            'Access to all Department Specialist.',
            'Access to Shop/Purchase.',
            'Access to First Aid Assistance.',
            'Access to Standard Support.'
        ]
    },
    {
        name:'Premium',
        message:'Subscrie to Premium Subscribers',
        price:'60,000',
        duration:'month',
        active:false,
        commission:undefined,
        offers:[
            'Video Consultation and chat.',
            'Access to unlimited AI Chatbot Response.',
            'Access to unlimited Chatbot Requests.',
            'Access to all Department Specialist.',
            'Access to Shop/Purchase.',
            'Access to First Aid Assistance.',
            'Access to Standard Support.'
        ]
    },
  
    
]

export {patientPlans}