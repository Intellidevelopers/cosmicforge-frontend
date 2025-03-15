
import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import Logo from '../../../assets/logo/logo_comsic_splash.svg'
import rightButton from '../../../assets/icons/Right.svg'

import nutellaImage from '../../../assets/advert/cosmic-advert-nutella.svg'
import pampers from '../../../assets/advert/cosmic-advert-pampers.svg'
import huggies from '../../../assets/advert/cosmic-advert-huggies.svg'
import nescafe from '../../../assets/advert/cosmic-advert-nescafe.svg'
import cocacola from '../../../assets/advert/cosmic-advert-cocacola.svg'
import milo from '../../../assets/advert/cosmic-advert-milo.png'
import uniliver from '../../../assets/advert/cosmic-advert-uniliver.svg'
import image from '../../../assets/images/image.png'
import image1 from '../../../assets/images/FirstImagCustomView.svg'
import image2 from '../../../assets/images/secondImagCustomview.svg'
import image3 from '../../../assets/images/thirdImageCustomView.svg'
import { getDoctorDeparmentsForLandingPage } from '../../profile/service';
import DepartmentCardS from '../component/DepartmentCard';
import text from '../../../assets/background/whatPatientSay.svg'
import docImage from '../../../assets/images/doctor-image.jpeg'
import WellnessProductCard, { WellnessProductCardProps } from '../../home/component/patient/WellnessProductCard';
import tempProductImage from '../../../assets/images/cosmic-wellness-product-temp.svg'
import linePath1 from '../../../assets/background/cosmic-line-path-1.svg'
import linePath2 from '../../../assets/background/cosmic-line-path-2.svg'
import linePath3 from '../../../assets/background/cosmic-line-path-3.svg'
import linePath4 from '../../../assets/background/cosmic-line-path-4.svg'
import FrequentlyAskedQuestionsCard from '../component/FrequentlyAskedQuestionCard';
import playStore from '../../../assets/background/cosmic-download-android.svg'
import appleStore from '../../../assets/background/cosmic-download-ios.svg'
import imageDisplay from '../../../assets/images/cosmic-mobile-display.svg'
import profileIconTmp from "../../../assets/images/cosmic-display-client-profile.png";
import timer from "../../../assets/images/cosmic-dispay-timer.svg";
import icons from "../../../assets/images/cosmic-display-icons.svg";
import profile2 from "../../../assets/images/cosmic-display-profile-2.svg"
import profile3 from "../../../assets/images/cosmic-display-profile-3.svg"
import profile4 from "../../../assets/images/cosmic-display-profile-4.svg"
import newProfile from "../../../assets/images/cosmic-display-profile-new.svg"
import mainNewsIcon from '../../../assets/icons/cosmic-main-new-image.svg'
import newsIcon1 from '../../../assets/icons/cosmic-news-1.svg'
import newsIcon2 from '../../../assets/icons/cosmic-news-2.svg'
import newsIcon3 from '../../../assets/icons/cosmic-news-3.svg'
import bgDocImage from '../../../assets/background/cosmic-landing-page-bg-image.svg'

import healthEdu from '../../../assets/icons/cosmic-features-health-edu.svg'
import pharmacy from '../../../assets/icons/cosmic-features-physiotherapy.svg'
import lab from '../../../assets/icons/cosmic-features-lab.svg'
import ai from '../../../assets/icons/cosmic-features-virtual-reality.svg'
import fitness from '../../../assets/icons/cosmic-features-fit-and-emergency.svg'
import therapy from '../../../assets/icons/cosmic-features-therapy.svg'


import Footer from '../component/Footer';




const faq: { title: string, body: string }[] = [{
    title: 'What is this platform, and how does it work?',
    body: 'We prioritize your privacy and security. Our platform employs advanced encryption standards and complies with healthcare data protection regulations to ensure that all personal and medical information remains confidential and secure. We also implement robust authentication processes to prevent unauthorized access.'
}, {
    title: 'Is my personal and medical data secure on this platform?',
    body: 'We prioritize your privacy and security. Our platform employs advanced encryption standards and complies with healthcare data protection regulations to ensure that all personal and medical information remains confidential and secure. We also implement robust authentication processes to prevent unauthorized access.'
}, {
    title: 'Who can use this platform?',
    body: 'We prioritize your privacy and security. Our platform employs advanced encryption standards and complies with healthcare data protection regulations to ensure that all personal and medical information remains confidential and secure. We also implement robust authentication processes to prevent unauthorized access.'
},
{
    title: 'How do I sign up as a doctor, patient, laboratory, or pharmacy?',
    body: 'We prioritize your privacy and security. Our platform employs advanced encryption standards and complies with healthcare data protection regulations to ensure that all personal and medical information remains confidential and secure. We also implement robust authentication processes to prevent unauthorized access.'
},
{
    title: 'Can I access the platform on mobile and desktop?',
    body: 'We prioritize your privacy and security. Our platform employs advanced encryption standards and complies with healthcare data protection regulations to ensure that all personal and medical information remains confidential and secure. We also implement robust authentication processes to prevent unauthorized access.'
}]





const LandingPage: React.FC = () => {
    const wellnessProducts: WellnessProductCardProps[] = [
        {
            productTitle: ' Ibuprofen 400mg',
            productDescription: ' 100 tablets',
            productImage: tempProductImage,
            productPrice: " N 3,500"

        },
        {
            productTitle: ' Ibuprofen 400mg',
            productDescription: ' 100 tablets',
            productImage: tempProductImage,
            productPrice: " N 3,500"

        },
        {
            productTitle: ' Ibuprofen 400mg',
            productDescription: ' 100 tablets',
            productImage: tempProductImage,
            productPrice: " N 3,500"

        },
        {
            productTitle: ' Ibuprofen 400mg',
            productDescription: ' 100 tablets',
            productImage: tempProductImage,
            productPrice: " N 3,500"

        },
        {
            productTitle: ' Ibuprofen 400mg',
            productDescription: ' 100 tablets',
            productImage: tempProductImage,
            productPrice: " N 3,500"

        },
        {
            productTitle: ' Ibuprofen 400mg',
            productDescription: ' 100 tablets',
            productImage: tempProductImage,
            productPrice: " N 3,500"

        }
        , {
            productTitle: ' Ibuprofen 400mg',
            productDescription: ' 100 tablets',
            productImage: tempProductImage,
            productPrice: " N 3,500"

        }
    ]


    const autoScrollRef: MutableRefObject<HTMLDivElement | null> = useRef(null)

    const [departments, setDepartments] = useState<{ name: string, image: string }[]>()

    useEffect(() => {

        if (autoScrollRef.current) {

            autoScrollRef.current.animate([
                {
                    transform: 'translateX(0)'
                },
                {
                    transform: 'translateX(-100%)'
                }
            ], {
                duration: 10000,
                iterations: Infinity,
                easing: 'linear'
            })
        }


        (async () => {
            try {
                const result = await getDoctorDeparmentsForLandingPage()

                if (result.status === 200) {
                    setDepartments(result.data)
                }
                // alert(JSON.stringify(result))
            } catch (error) {

            }
        })()



    }, [])




    return (
        <div className='w-full overflow-x-hidden relative font-poppins bg-cosmic-color-landing-1 h-full font-bold grid grid-cols-7 '>

            {/**
             * Header
             */}
            <div className='w-full   col-span-7 grid grid-cols-3 h-[80px]   p-3 relative '>

                <img src={Logo} className='w-full h-[50px] col-span-1  ' />

                <div className='  w-full h-[50px] col-span-2 flex place-items-center md:justify-evenly justify-end'>

                    <div className='w-full  hidden  md:flex md:place-items-center md:justify-evenly justify-end'>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>Login</p>

                    </div>

                    <p className='bg-cosmic-primary-color text-white p-2 rounded-md '>Register</p>


                </div>



            </div>

            <div className=' w-full   col-span-7  grid grid-cols-2  relative'>

                <div className='h-[500px] col-span-2 w-full flex justify-center'>

                    <div className='w-full h-full relative '>
                        <img src={bgDocImage} className='absolute right-0  top-[20%] md:right-[20%] md:top-[12%] w-[180px]   md:w-[350px]' />

                    </div>
                    <p className='  md:max-w-[450px] font-bold md:text-[24px] text-[20px]  absolute right-[43%] xl:right-[40%] top-[25%]'><span className='text-cosmic-primary-color'>Simplified</span> and Smarter <span className='text-cosmic-primary-color'>Healthcare</span> solutions, One click at a time.</p>
                    <p className=' hidden md:block  me-16 text-[14px] mt-4 absolute right-[44%] xl:right-[43%] top-[38%]'>Streamlining healthcare services to meet your needs...</p>

                    <div className='hidden md:flex  w-[350px] h-[100px] me-[90px] text-[14px] mt-4 absolute right-[45%] top-[45%]  place-items-start justify-center gap-10'>
                        <p className='bg-cosmic-primary-color p-3 text-white rounded-md'>Get Started</p>
                        <p className='border border-cosmic-color-landing-1 p-3  rounded-md'>Learn more</p>



                    </div>

                    <div className=' hidden md:flex w-[350px] h-[100px] me-[80px] text-[14px] mt-4 absolute right-[47%] top-[55%]  place-items-start justify-center gap-10'>



                        <i className='fa fa-angle-left  fa-xl text-cosmic-primary-color ' style={{
                            transform: "rotate(58deg)"
                        }} />

                    </div>



                    <div className='hidden md:flex absolute  top-[50%] left-[50%] w-[20%] min-h-[80px]   justify-center p-2'>

                        <div>

                            <svg width={250} height={200} className='absolute right-[85%] top-[0%]'>





                                <path
                                    d="M0, 50, Q50,200,400,50"
                                    stroke='rgba(39, 46, 167, 1)'
                                    strokeWidth={2}
                                    strokeDasharray={"10,10"}
                                    fill='none'

                                />






                            </svg>
                        </div>

                        <div className='hidden md:flex  absolute top-[90%] left-[20%] w-[90%] min-h-[80px]   justify-center '>
                            <p className='w-full  bg-cosmic-light-color-call text-[16px] font-bold'>Need access to Remote Healthcare ? Cosmicforge is here to serve you.</p>
                        </div>



                    </div>

                </div>
                <div className='bg-cosmic-color-white-bacground backdrop-blur-2xl h-fit absolute w-full top-[90%]'>
                    <div className='w-full m-3 flex justify-center me-20 relative overflow-x-hidden'> <p>--Trusted By-</p></div>
                    <div ref={autoScrollRef} className='w-full inline-flex  gap-8 '>
                        <img src={nutellaImage} className='w-[300px] h-[100px]' />
                        <img src={pampers} className='w-[300px] h-[100px]' />
                        <img src={huggies} className='w-[300px] h-[100px]' />
                        <img src={nescafe} className='w-[300px] h-[100px]' />
                        <img src={cocacola} className='w-[300px] h-[100px]' />
                        <img src={uniliver} className='w-[300px] h-[100px]' />
                        <img src={milo} className='w-[300px] h-[100px]' />

                        {/**dupicate */}
                        <img src={nutellaImage} className='w-[300px] h-[100px]' />
                        <img src={pampers} className='w-[300px] h-[100px]' />
                        <img src={huggies} className='w-[300px] h-[100px]' />
                        <img src={nescafe} className='w-[300px] h-[100px]' />
                        <img src={cocacola} className='w-[300px] h-[100px]' />
                        <img src={uniliver} className='w-[300px] h-[100px]' />
                        <img src={milo} className='w-[300px] h-[100px]' />
                    </div>
                </div>




            </div>







            <div className='w-full  col-span-7 h-full mt-[200px] '>
                <div className='w-full flex flex-col place-items-center justify-center gap-4 '>
                    <p className='text-cosmic-primary-color font-bold text-[24px] mt-4'>Our Features</p>
                    <p>What we are offering you.</p>

                    <div className='w-[100vw] md:w-[800px] inline-flex gap-3 overflow-x-auto'>

                        <div className='w-[300px] h-fit m-5 relative'>
                            <div className='bg-cosmic-landing-page-card-bg h-[400px] w-[300px] bg-contain bg-no-repeat '>
                                <div className='w-full flex flex-col justify-center p-5'>
                                    <img src={image} className='h-[200px] w-[300px] border' />

                                    <div className='w-full mt-2'>
                                        <p>Unified Healthcare Hub</p>
                                        <p className='font-light'>A unified platform connecting doctors, patients, labs, and pharmacies seamlessly.</p>
                                    </div>

                                </div>

                            </div>
                            <div className='w-[80px] h-[50px] absolute bottom-3 right-3  bg-white rounded-md flex justify-center place-items-center'>
                                dd
                            </div>
                        </div>


                        <div className='w-[300px] h-fit m-5 relative'>
                            <div className='bg-cosmic-landing-page-card-bg h-[400px] w-[300px] bg-contain bg-no-repeat '>
                                <div className='w-full flex flex-col justify-center p-5'>
                                    <img src={image} className='h-[200px] w-[300px] border' />

                                    <div className='w-full mt-2'>
                                        <p>Unified Healthcare Hub</p>
                                        <p className='font-light'>A unified platform connecting doctors, patients, labs, and pharmacies seamlessly.</p>
                                    </div>

                                </div>

                            </div>
                            <div className='w-[80px] h-[50px] absolute bottom-3 right-3  bg-white rounded-md flex justify-center place-items-center'>
                                <img src={rightButton} />
                            </div>
                        </div>

                        <div className='w-[300px] h-fit m-5 relative'>
                            <div className='bg-cosmic-landing-page-card-bg h-[400px] w-[300px] bg-contain bg-no-repeat '>
                                <div className='w-full flex flex-col justify-center p-5'>
                                    <img src={image} className='h-[200px] w-[300px] border' />

                                    <div className='w-full mt-2'>
                                        <p>Unified Healthcare Hub</p>
                                        <p className='font-light'>A unified platform connecting doctors, patients, labs, and pharmacies seamlessly.</p>
                                    </div>

                                </div>

                            </div>
                            <div className='w-[80px] h-[50px] absolute bottom-3 right-3  bg-white rounded-md flex justify-center place-items-center'>
                                <img src={rightButton} />
                            </div>
                        </div>


                        <div className='w-[300px] h-fit m-5 relative'>
                            <div className='bg-cosmic-landing-page-card-bg h-[400px] w-[300px] bg-contain bg-no-repeat '>
                                <div className='w-full flex flex-col justify-center p-5'>
                                    <img src={image} className='h-[200px] w-[300px] border' />

                                    <div className='w-full mt-2'>
                                        <p>Unified Healthcare Hub</p>
                                        <p className='font-light'>A unified platform connecting doctors, patients, labs, and pharmacies seamlessly.</p>
                                    </div>

                                </div>

                            </div>
                            <div className='w-[80px] h-[50px] absolute bottom-3 right-3  bg-white rounded-md flex justify-center place-items-center'>
                                dd
                            </div>
                        </div>

                        <div className='w-[300px] h-fit m-5 relative'>
                            <div className='bg-cosmic-landing-page-card-bg h-[400px] w-[300px] bg-contain bg-no-repeat '>
                                <div className='w-full flex flex-col justify-center p-5'>
                                    <img src={image} className='h-[200px] w-[300px] border' />

                                    <div className='w-full mt-2'>
                                        <p>Unified Healthcare Hub</p>
                                        <p className='font-light'>A unified platform connecting doctors, patients, labs, and pharmacies seamlessly.</p>
                                    </div>

                                </div>

                            </div>
                            <div className='w-[80px] h-[50px] absolute bottom-3 right-3  bg-white rounded-md flex justify-center place-items-center'>
                                <img src={rightButton} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            {/** Why container */}

            <div className='mt-7 bg-white w-full col-span-7 '>
                <div className='w-full flex flex-col gap-6 place-items-center  '>
                    <p className='text-cosmic-primary-color mt-8 text-[24px]'> Why Us?</p>
                    <p>Why should you trust us.</p>
                </div>

                <div className='w-full grid grid-cols-3  mt-6'>
                    <div className='col-span-3 md:col-span-2 flex  flex-col place-items-center gap-8' >


                        <div className='  flex gap-8 ms-4 p-3 '>
                            <p className=' w-[40px]
                h-[40px] rounded-full bg-cosmic-primary-color text-white flex justify-center place-items-center' >1</p>
                            <div className='md:w-[350px] '>
                                <p> Qualified Medical Professionals</p>
                                <p className='font-light text-justify '>Our physicians are certified and licensed professionals, who provide patients with standard medical care</p>
                            </div>
                        </div>


                        <div className=' flex gap-8 ms-4 p-3 '>
                            <p className='w-[40px]
                h-[40px] rounded-full bg-cosmic-primary-color text-white flex justify-center place-items-center' >2</p>
                            <div className='md:w-[350px]'>
                                <p>   AI and Modern Technologies</p>
                                <p className='font-light'>Our physicians are certified and licensed professionals, who provide patients with standard medical care</p>
                            </div>



                        </div>



                        <div className=' flex gap-8 ms-4 p-3 '>
                            <p className='w-[40px]
                                                    h-[40px] rounded-full bg-cosmic-primary-color text-white flex justify-center place-items-center' >3</p>
                            <div className='md:w-[350px]'>
                                <p>   Patient-Doctor Confidentiality</p>
                                <p className='font-light'>Our physicians are certified and licensed professionals, who provide patients with standard medical care</p>
                            </div>



                        </div>



                    </div>


                    <div className='col-span-1 h-[400px] relative hidden md:block' >

                        <img className='h-[350px]  absolute top-8 right-[40%]' src={image1} />

                        <img className='h-[300px] absolute top-12 right-[45%] ' src={image2} />

                        <img className='h-[300px] absolute top-16 right-[60%]' src={image3} />
                    </div>



                </div>


            </div>

            <div className='w-full  col-span-7 h-full mt-[10px] '>

                <div className='w-full relative'>
                    <p className='text-cosmic-primary-color font-bold text-[24px] mt-4 ms-[50px]'>Browse by Departments</p>
                    <p className='text-cosmic-primary-color  text-[14px] mt-4 ms-[40px] absolute top-0 right-8'>See more</p>
                </div>

                <div className='w-full flex flex-col place-items-center justify-center gap-4 '>


                    <div className='w-[100vw] md:w-[800px] inline-flex gap-3 overflow-x-auto'>

                        {
                            departments && departments.length > 0 && departments.map((department, index) => (
                                <DepartmentCardS key={index} name={department.name} image={department.image} />
                            ))
                        }
                    </div>


                </div>












            </div>



            {/**Other features we have to Offer container */}



            <div className='w-full  col-span-7 h-full mt-[10px]   '>
                <div className='w-full flex flex-col place-items-center justify-center gap-4 '>


                    <p className='text-cosmic-primary-color font-bold text-[24px] mt-4'>Other features we have to Offer</p>

                    <p className='font-light md:w-[650px]'>At Cosmicforge, we offer a range of standardized top notch services to ensure we provide you with the best affordable and remote healthcare at your convenience.</p>

                    <div className='w-[100vw]  inline-flex justify-center  place-items-center flex-wrap gap-3 '>

                        <div className='w-[300px] h-fit m-5 relative'>
                            <div className=' h-[250px] w-[300px]  bg-white '>


                                <div className='w-full flex flex-col justify-center p-5'>
                                    <img src={pharmacy} className='h-[30px] w-[30px] border' />

                                    <div className='w-full mt-2'>
                                        <p>Pharmacy</p>
                                        <p className='font-light'>Easily manage prescriptions, track medications, and connect with pharmacies for fast, reliable service.</p>
                                        <div>
                                            <p className='mt-4'>Learn More</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className='w-[300px] h-fit m-5 relative '>
                            <div className=' h-[250px] w-[300px]  bg-white '>


                                <div className='w-full flex flex-col justify-center p-5'>
                                    <img src={lab} className='h-[30px] w-[30px] border' />

                                    <div className='w-full mt-2'>
                                        <p>Laboratory</p>
                                        <p className='font-light'>Schedule sample collections, access test results, and simplify lab management for doctors, patients, and laboratories.</p>
                                        <div>
                                            <p className='mt-4'>Learn More</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className='w-[300px] h-fit m-5 relative'>
                            <div className=' h-[250px] w-[300px]  bg-white '>


                                <div className='w-full flex flex-col justify-center p-5'>
                                    <img src={fitness} className='h-[30px] w-[30px] border' />

                                    <div className='w-full mt-2'>
                                        <p>First Aid & Emergency</p>
                                        <p className='font-light'>Access step-by-step first-aid instructions and quickly contact emergency services like ambulance, fire, and police.</p>
                                        <div>
                                            <p className='mt-4'>Learn More</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className='w-[300px] h-fit m-5 relative'>
                            <div className=' h-[250px] w-[300px]  bg-white '>


                                <div className='w-full flex flex-col justify-center p-5'>
                                    <img src={healthEdu} className='h-[30px] w-[30px] border' />

                                    <div className='w-full mt-2'>
                                        <p>Health Education</p>
                                        <p className='font-light'>Stay informed with personalized health resources, from condition management to wellness tips, empowering better decisions.</p>
                                        <div>
                                            <p className='mt-4'>Learn More</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className='w-[300px] h-fit m-5 relative '>
                            <div className=' h-[250px] w-[300px]  bg-white '>


                                <div className='w-full flex flex-col justify-center p-5'>
                                    <img src={ai} className='h-[30px] w-[30px] border' />

                                    <div className='w-full mt-2'>
                                        <p>Virtual Reality Assistance</p>
                                        <p className='font-light'>Enhance diagnosis, treatment, and patient engagement with immersive VR technology for both therapy and education.</p>
                                        <div>
                                            <p className='mt-4'>Learn More</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className='w-[300px] h-fit m-5 relative'>
                            <div className=' h-[250px] w-[300px]  bg-white '>


                                <div className='w-full flex flex-col justify-center p-5'>
                                    <img src={therapy} className='h-[30px] w-[30px] border' />

                                    <div className='w-full mt-2'>
                                        <p>Therapy</p>
                                        <p className='font-light'>Access mental and physical therapy services with personalized care plans, virtual sessions, and progress tracking.</p>
                                        <div>
                                            <p className='mt-4'>Learn More</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>



                    </div>
                </div>
            </div>



            <div className='w-full  bg-cosmic-testimonial col-span-7 h-fit mt-[10px] md:p-8 '>


                <div className='bg-cosmic-primary-color  h-full  '>
                    <div className='w-full flex justify-center items-center  flex-col gap-3'>
                        <p className='mt-6 text-white'>Testimonials</p>
                        <img src={text} alt='text' />

                    </div>
                    <div className='w-full inline-flex mt-4 relative overflow-x-auto gap-6 p-6'>

                        <div className='w-full flex justify-center relative'>

                            <div className='w-[350px] h-[250px] bg-white  mt-10'>
                                <div className=' w-full absolute bottom-[70%]  flex justify-center place-items-center '>
                                    <img src={docImage} className='w-[100px] h-[100px] rounded-full ' />
                                </div>

                                <div className='mt-[74px] p-2'>
                                    <p className='text-center font-light'>Grace Jennifer Williams</p>
                                    <p className='font-light mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                                </div>

                            </div>
                        </div>



                        <div className='w-full flex justify-center relative'>

                            <div className='w-[350px] h-[250px] bg-white  mt-10'>
                                <div className=' w-full absolute bottom-[70%]  flex justify-center place-items-center '>
                                    <img src={docImage} className='w-[100px] h-[100px] rounded-full ' />
                                </div>

                                <div className='mt-[74px] p-2'>
                                    <p className='text-center font-light'>Grace Jennifer Williams</p>
                                    <p className='font-light mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                                </div>

                            </div>
                        </div>


                        <div className='w-full flex justify-center relative'>

                            <div className='w-[350px] h-[250px] bg-white  mt-10'>
                                <div className=' w-full absolute bottom-[70%]  flex justify-center place-items-center '>
                                    <img src={docImage} className='w-[100px] h-[100px] rounded-full ' />
                                </div>

                                <div className='mt-[74px] p-2'>
                                    <p className='text-center font-light'>Grace Jennifer Williams</p>
                                    <p className='font-light mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                                </div>

                            </div>
                        </div>


                        <div className='w-full flex justify-center relative'>

                            <div className='w-[350px] h-[250px] bg-white  mt-10'>
                                <div className=' w-full absolute bottom-[70%]  flex justify-center place-items-center '>
                                    <img src={docImage} className='w-[100px] h-[100px] rounded-full ' />
                                </div>

                                <div className='mt-[74px] p-2'>
                                    <p className='text-center font-light'>Grace Jennifer Williams</p>
                                    <p className='font-light mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                                </div>

                            </div>
                        </div>

                        <div className='w-full flex justify-center relative'>

                            <div className='w-[350px] h-[250px] bg-white  mt-10'>
                                <div className=' w-full absolute bottom-[70%]  flex justify-center place-items-center '>
                                    <img src={docImage} className='w-[100px] h-[100px] rounded-full ' />
                                </div>

                                <div className='mt-[74px] p-2'>
                                    <p className='text-center font-light'>Grace Jennifer Williams</p>
                                    <p className='font-light mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                                </div>

                            </div>
                        </div>


                        <div className='w-full flex justify-center relative'>

                            <div className='w-[350px] h-[250px] bg-white  mt-10'>
                                <div className=' w-full absolute bottom-[70%]  flex justify-center place-items-center '>
                                    <img src={docImage} className='w-[100px] h-[100px] rounded-full ' />
                                </div>

                                <div className='mt-[74px] p-2'>
                                    <p className='text-center font-light'>Grace Jennifer Williams</p>
                                    <p className='font-light mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                                </div>

                            </div>
                        </div>



                    </div>



                </div>
            </div>



            <div className='w-full   col-span-7 h-fit bg-cosmic-primary-color  p-2 md:p-12 '>

                <div className='w-full h-fit bg-white'>
                    <div className='md:m-3 w-full flex justify-center flex-col place-items-center md:pt-8 relative'>
                        <p className='text-[24px] '>Shop with <span className='text-cosmic-primary-color'>Us</span></p>
                        <p className='font-light'>Shop for your products, we've got you covered</p>
                        <p className='bg-cosmic-primary-color text-white p-2 rounded-md mt-4 md:mt-0 md:top-8  md:absolute right-20'>Go to shop</p>

                        <div className='w-full md:p-8'>
                            <div className='w-full  inline-flex overflow-x-auto'>
                                {
                                    wellnessProducts && wellnessProducts.length > 0 && wellnessProducts.map((product, id) => (
                                        <WellnessProductCard key={id} productImage={product.productImage} productTitle={product.productTitle} productDescription={product.productDescription} productPrice={product.productPrice} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='w-full  bg-white col-span-7 h-fit flex justify-center place-items-center md:p-8 '>

                <div className='w-[400px] relative'>
                    <img src={linePath1} className='w-[100%] h-[100%] ' alt='path' />
                    <img src={linePath2} className='absolute  w-[80%] h-[80%]  top-[10%] right-[8%]' alt='path' />
                    <img src={linePath3} className='absolute w-[60%] h-[60%] top-[20%] right-[20%]' alt='path' />
                    <img src={linePath4} className='absolute   w-[40%] h-[40%] top-[30%] right-[30%]' alt='path' />
                    <img src={milo} className='absolute  w-[80px] h-[80px] top-[8%] right-[8%]' alt='path' />
                    <img src={nescafe} className='absolute  w-[80px] h-[80px] top-[40%] right-[0%]' alt='path' />
                    <img src={huggies} className='absolute  w-[80px] h-[80px] top-[60%] right-[0%]' alt='path' />
                    <img src={nutellaImage} className='absolute  w-[80px] h-[80px] top-[20%] left-[8%]' alt='path' />
                    <img src={cocacola} className='absolute  w-[80px] h-[80px] top-[45%] left-[0%]' alt='path' />
                    <img src={pampers} className='absolute  w-[80px] h-[80px] top-[50%] left-[30%]' alt='path' />
                    <img src={uniliver} className='absolute  w-[80px] h-[80px] top-[30%] right-[36%]' alt='path' />
                </div>



            </div>

            <div className='w-full   bg-white col-span-7 h-fit md:p-8 '>

                <div className='w-full flex flex-col justify-center place-items-center '>
                    <div className='w-full flex flex-col md:gap-4 justify-center place-items-center'>
                        <p>Blog & News</p>
                        <p className='text-cosmic-primary-color'>Our latest Blog & News</p>
                    </div>

                    <div className='w-full grid grid-cols-2 gap-12 mt-2 '>

                        <div className='w-full  col-span-2 md:col-span-1 flex flex-col justify-center place-items-end gap-3'>

                            <img src={mainNewsIcon} alt='image' className='w-[400px] h-fit' />
                            <div className='w-[400px]'>
                                <p className='mt-2'>Blog Post 1</p>
                                <p className='font-light mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div className='flex font-extralight mt-2'>
                                    <p>see more</p>
                                    <p>d</p>
                                </div>
                            </div>

                        </div>



                        <div className='w-full    col-span-2 md:col-span-1 pt-[100px]  '>
                            <div className=' flex gap-3 '>
                                <img src={newsIcon1} alt='image' className='w-[100px] h-[100px]' />
                                <div className='w-full '>
                                    <p className=''>Blog Post 1</p>
                                    <p className='font-light mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <div className='flex font-extralight mt-2'>
                                        <p>see more</p>
                                        <p>d</p>
                                    </div>
                                </div>
                            </div>

                            <div className=' flex gap-3 mt-6'>
                                <img src={newsIcon2} alt='image' className='w-[100px] h-[100px]' />
                                <div className='w-full '>
                                    <p className=''>Blog Post 2</p>
                                    <p className='font-light mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <div className='flex font-extralight mt-2'>
                                        <p>see more</p>
                                        <p>d</p>
                                    </div>
                                </div>
                            </div>


                            <div className=' flex gap-3 mt-6'>
                                <img src={newsIcon3} alt='image' className='w-[100px] h-[100px]' />
                                <div className='w-full '>
                                    <p className=''>Blog Post 3</p>
                                    <p className='font-light mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <div className='flex font-extralight mt-2'>
                                        <p>see more</p>
                                        <p>d</p>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
                <div className='w-full mt-8 flex justify-center place-items-center col-span-7'>

                    <p className='bg-cosmic-primary-color text-white p-2 text-sm rounded-md'>View more</p>
                </div>


                {/** FAQ */}
                <div className='w-full mt-8  bg-cosmic-primary-color col-span-7 h-fit flex flex-col justify-center place-items-center md:p-8 '>

                    <div className='flex flex-col justify-center place-items-center gap-5'>
                        <p className='text-white'>FAQ</p>
                        <p className='text-white'>Frequently Asked Questions</p>
                    </div>

                    <div className='w-full h-[2px] bg-white mt-8 relative'>




                    </div>

                    <div className='w-full'>

                        {
                            faq && faq.length > 0 && faq.map((data, i) => (
                                <FrequentlyAskedQuestionsCard key={i} title={data.title} body={data.body} />
                            ))
                        }
                    </div>



                </div>




                <div className='w-full  col-span-7  h-fit flex flex-col justify-center place-items-center md:p-8  '>
                    <p className='text-cosmic-primary-color font-extrabold'>
                        The future of healthcare, promoting timely convinience
                    </p>

                    <p className='mt-8 font-light'>Our official App is available for download on App Store and Play Store.</p>

                    <p className='mt-8 font-light'>Download Now</p>

                    <div className='mt-8 flex gap-8 flex-wrap justify-center '>

                        <img src={appleStore} alt='ios' />

                        <img src={playStore} alt='android' />

                    </div>

                    <div className='w-full mt-12 flex gap-8 flex-wrap  h-fit justify-center relative'>

                        <div className='w-[300px]  relative '>

                            <img src={docImage} className='h-[300px]' alt='image' />
                            <img src={profileIconTmp} className='left-1 h-[100px] w-[100px] absolute top-1' alt='image' />
                            <img src={timer} className='left-[35%] h-[100px] w-[100px] absolute top-[28%]' alt='image' />
                            <img src={icons} className='left-[20%] h-[40px] w-[200px] absolute top-[55%] md:top-[45%] bg-cosmic-light-color-call' alt='image' />
                            <div className='mt-3 bg-white shadow-md h-[120px] rounded-md p-3'>
                                <p>Virtual Consultation</p>
                                <p className='font-light mt-3'>Virtual Consultation with specialist to meet your health needs.</p>
                            </div>
                        </div>

                        <img src={imageDisplay} className='w-[300px]' alt="phone-image" />

                        <div className='w-[300px] h-fit '>
                            <div className=' bg-white shadow-md h-fit rounded-md p-3 '>
                                <p>Profiles</p>
                                <div className='w-full flex flex-wrap gap-8 mt-8'>
                                    <img src={profile2} className='h-[80px]' alt='image' />
                                    <img src={profile3} className='h-[80px]' alt='image' />
                                    <img src={profile4} className='h-[80px]' alt='image' />
                                    <img src={newProfile} className='h-[80px]' alt='image' />
                                </div>
                            </div>

                            <div className='mt-3 bg-white shadow-md h-[120px] rounded-md p-3'>
                                <p>Profile Management</p>
                                <p className='font-light mt-3'>Control Health history and data through profile management</p>
                            </div>
                        </div>

                    </div>

                </div>





                <div className='w-full mt-8 col-span-7 h-fit flex  flex-wrap gap-8  justify-center place-items-center md:p-8 '>


                    <div className=' flex'>
                        <div className='flex flex-col place-items-center justify-center'>
                            <p className='text-cosmic-primary-color font-bold text-[24px]'>1K</p>
                            <p className='font-light text-sm mt-2'>Total Application Users</p>
                        </div>
                        <div className='h-[100px] border ms-2'>

                        </div>
                    </div>



                    <div className=' flex'>
                        <div className='flex flex-col place-items-center justify-center'>
                            <p className='text-cosmic-primary-color font-bold text-[24px]'>500+</p>
                            <p className='font-light text-sm mt-2'>Doctors who have joined us</p>
                        </div>
                        <div className='h-[100px] border ms-2'>

                        </div>
                    </div>


                    <div className=' flex'>
                        <div className='flex flex-col place-items-center justify-center'>
                            <p className='text-cosmic-primary-color font-bold text-[24px]'>50+</p>
                            <p className='font-light text-sm mt-2'>Pharmacies who have joined us</p>
                        </div>
                        <div className='h-[100px] border ms-2'>

                        </div>
                    </div>


                    <div className=' flex'>
                        <div className='flex flex-col place-items-center justify-center'>
                            <p className='text-cosmic-primary-color font-bold text-[24px]'>30+</p>
                            <p className='font-light text-sm mt-2'>Laboratories who have joined us</p>
                        </div>
                        <div className='h-[100px] border ms-2'>

                        </div>
                    </div>



                    <div className=' flex'>
                        <div className='flex flex-col place-items-center justify-center'>
                            <p className='text-cosmic-primary-color font-bold text-[24px]'>80%</p>
                            <p className='font-light text-sm mt-2'>Growth since Launch</p>
                        </div>
                        <div className='h-[100px] border ms-2'>

                        </div>
                    </div>


                </div>












            </div>
            <div className='w-full  bg-cosmic-primary-color text-white col-span-7 h-fit flex flex-col justify-center place-items-center md:p-8 '>

                <p className=''>Sign Up for Our Newsletter</p>
                <p className='mt-2 font-light'>Get weekly update about our products and services on your email</p>
                <div className=' w-full md:w-[50%] border mt-3 grid grid-cols-3 h-[50px]'>

                    <div className='col-span-2 w-full   '>
                        <input placeholder='enter email ' className='w-full h-full bg-transparent p-1 font-light outline-none' />
                    </div>

                    <div className='col-span-1 w-full bg-white text-cosmic-primary-color font-light flex justify-center place-items-center'>
                        Subscribe Now
                    </div>
                </div>
            </div>




            {/**
 footer
*/}


            <div className='w-full   text-white col-span-7 h-fit flex flex-col justify-center place-items-center '>
                <Footer />

            </div>




            {/* { isImageLoaded && <SlideScreen banner={banner}/> }
            { (!isImageLoaded) && <SplashScreen/>} */}
        </div>
    )
}

export default LandingPage