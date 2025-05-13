import bell from '../../../../assets/icons/Bell.png'
import earn from '../../../../assets/images/Transaction.png'
import sub from '../../../../assets/images/Membership Card.png'
import pWord from '../../../../assets/images/Lock.png'
import AI from '../../../../assets/images/ai.png'
import help from '../../../../assets/images/helpCenter.png'
import language from '../../../../assets/images/languageGlobe.png'
import faqs from '../../../../assets/images/faq.png'
import privacyPolicy from '../../../../assets/images/privacyPolicy.png'
import logOut from '../../../../assets/images/logOUt.png'
import bkMk from '../../../../assets/images/Bookmark.png'
import fav from '../../../../assets/images/Heart.png'
import rating from '../../../../assets/images/Rating.png'



const settings = [
    {
        image:bell,
        name:'Notifications',
        path:''
    },
    {
        image:earn,
        name:'Transaction History',
        path:'/patient/transaction-history'
    },
    {
        image:sub,
        name:'Subscription',
        path:'/patient/subscription'
    },
    {
        image:bkMk,
        name:'Bookmark',
        path:'/patient/bookmark'
    },
    {
        image:fav,
        name:'Favorites',
        path:'/patient/subscription'
    },
    {
        image:rating,
        name:'Rating',
        path:'/patient/subscription'
    },
    {
        image:pWord,
        name:'Password',
        path:''
    },
    {
        image:AI,
        name:'AI Chat Bot',
        path:''
    },
    {
        image:help,
        name:'Help Center',
        path:''
    },
    {
        image:language,
        name:'Language',
        path:'/patient/select-language'
    },
    {
        image:faqs,
        name:'FAQS',
        path:'/patient/faqs'
    },
    {
        image:privacyPolicy,
        name:'Privacy Policy',
        path:''
    },
    {
        image:logOut,
        name:'Log Out',
        path:''
    },
]

export {settings}