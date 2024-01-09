import React from 'react'
import './footer.css'
import Email from './Email'
const Footer = () => {

    // const styles={
    //     cardContainer:{
    //         display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'flex-start',
    // gap: 16,
    // alignSelf: 'stretch'
    //     },
    //     cardHead:{
    //         alignSelf: 'stretch',
    //         color:'black',

    // /* H50/16/Bold */
    // fontFamily: 'Inter',
    // fontSize: 16,
    // fontStyle: 'normal',
    // fontWeight: 700,
    // lineHeight: 20 /* 125% */
    //     },

    //     cardContent:{
    //         display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'flex-start',
    // gap: 16,
    // alignSelf: 'stretch',
    //     },

    // }

    const Card = ({ head, item1, item2, item3, item4 }) => {
        return (
            <div className='footer-container-row-content1-content2-content1-card'>
                <text className='footer-container-row-content1-content2-content1-card-head'>{head}</text>
                <div className='footer-container-row-content1-content2-content1-card-content' >
                    <div className='footer-container-row-content1-content2-content1-card-content-component'>
                        <text className='footer-container-row-content1-content2-content1-card-content-component-itemText'>{item1}</text>
                    </div>
                    <div className='footer-container-row-content1-content2-content1-card-content-component'>
                        <text className='footer-container-row-content1-content2-content1-card-content-component-itemText'>{item2}</text>
                    </div>
                    <div className='footer-container-row-content1-content2-content1-card-content-component'>
                        <text className='footer-container-row-content1-content2-content1-card-content-component-itemText'>{item3}</text>
                    </div>
                    <div className='footer-container-row-content1-content2-content1-card-content-component'>
                        <text className='footer-container-row-content1-content2-content1-card-content-component-itemText'>{item4}</text>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-container-row'>
                    <div className='footer-container-row-content1'>
                        <div className='footer-container-row-content1-content1'>
                            <div className='footer-container-row-content1-content1-content1'>
                                <div className='footer-container-row-content1-content1-content1-content1'>
                                    <div className='footer-container-row-content1-content1-content1-content1-logo'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="84" height="16" viewBox="0 0 84 16" fill="none">
                                            <path d="M3.29175 15.7647V7.76471L3.16008 5.29412H3.40148L4.25733 7.76471L7.32963 14.8235H11.3236L14.3959 7.76471L15.2518 5.29412H15.4932L15.3834 7.76471V15.7647H18.6752V0H14.1984L10.8628 7.76471L9.52413 11.4588H9.28274L7.9002 7.76471L4.45484 0H0V15.7647H3.29175ZM26.2613 16C30.0139 16 32.5376 13.6 32.5376 9.88235C32.5376 6.11765 30.0139 3.74118 26.2613 3.74118C22.5087 3.74118 19.985 6.11765 19.985 9.88235C19.985 13.6 22.5087 16 26.2613 16ZM26.2613 12.8706C24.0229 12.8706 23.2549 11.9529 23.2549 9.88235C23.2549 7.81177 24.0229 6.84706 26.2613 6.84706C28.4778 6.84706 29.2678 7.81177 29.2678 9.88235C29.2678 11.9529 28.4778 12.8706 26.2613 12.8706ZM38.7975 16C41.3213 16 42.7697 14.8235 43.1866 12.4941H43.3622V15.7647H46.4345V0H43.1427V7.10588H42.9452C42.5722 5.12941 41.2335 3.74118 38.622 3.74118C35.3522 3.74118 33.4869 6.11765 33.4869 9.88235C33.4869 13.6 35.3742 16 38.7975 16ZM36.8226 9.88235C36.8226 7.71765 37.8101 6.96471 39.9168 6.96471C42.0235 6.96471 43.1427 7.71765 43.1427 9.76471V9.95294C43.1427 12 42.0016 12.7765 39.9168 12.7765C37.8101 12.7765 36.8226 12.0235 36.8226 9.88235ZM54.0135 16C57.5028 16 59.8289 14.2118 59.8289 11.6471V11.3882H56.5372V11.6235C56.5372 12.6353 55.8569 13.1765 53.9038 13.1765C51.7751 13.1765 50.9851 12.4 50.8973 10.5882H59.8509C59.8948 10.1882 59.9387 9.88235 59.9387 9.45882C59.9387 5.76471 57.5467 3.74118 53.9477 3.74118C50.3268 3.74118 47.847 6.11765 47.847 9.88235C47.847 14.0706 50.3487 16 54.0135 16ZM53.8819 6.49412C55.813 6.49412 56.6908 7.17647 56.7786 8.72941H50.9412C51.0948 7.2 51.9287 6.49412 53.8819 6.49412ZM71.8308 16C76.6368 16 79.0507 13.4118 79.0507 9.17647V0H75.759V8.91765C75.759 11.6 74.8373 12.5647 71.8308 12.5647C68.8463 12.5647 67.9026 11.6 67.9026 8.91765V0H64.6109V9.17647C64.6109 13.4118 67.0468 16 71.8308 16ZM84 15.7647V0H80.7083V15.7647H84Z" fill="#121417" />
                                        </svg>
                                    </div>
                                    <text className='footer-container-row-content1-content1-content1-content1-logoDescr'>Mode UI is a comprehensive design system that empowers designers and developers to create cohesive and visually stunning user interfaces across various platforms and devices</text>
                                </div>
                            </div>
                        </div>
                        <div className='footer-container-row-content1-content2'>

                            <div className='footer-container-row-content1-content2-content1'>
                                <Card head="Company" item1="About us" item2="Pricing" item3="Contact us" item4="Features" />
                                <Card head="Product" item1="Figma design system" item2="Ios kit" item3="Android kit" item4="Wireframe" />
                                <Card head="Resources" item1="Templates" item2="Landing pages" item3="Documentation" item4="Comp library" />
                                <Card head="Legal" item1="Privacy policy" item2="Terms & Conditions" item3="Disclaimer" item4="Affiliate programme" />
                                <Card head="Raise ticket" item1="Raise ticket" item2="Raise ticket" item3="Report" item4="Refund" />
                            </div>
                        </div>
                    </div>




                    <div className='footer-container-row-content2'>
                        <div className='footer-container-row-content2-content1'>
                            <div className='footer-container-row-content2-content1-socialGRP'>
                                <div className='footer-container-row-content2-content1-socialGRP-social'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M10 1.66663C8.9057 1.66663 7.82207 1.88218 6.81102 2.30097C5.79998 2.71976 4.88132 3.33359 4.1075 4.10741C2.54469 5.67021 1.66672 7.78983 1.66672 9.99997C1.66672 13.6833 4.05839 16.8083 7.36672 17.9166C7.78339 17.9833 7.91672 17.725 7.91672 17.5V16.0916C5.60839 16.5916 5.11672 14.975 5.11672 14.975C4.73339 14.0083 4.19172 13.75 4.19172 13.75C3.43339 13.2333 4.25005 13.25 4.25005 13.25C5.08339 13.3083 5.52505 14.1083 5.52505 14.1083C6.25005 15.375 7.47505 15 7.95005 14.8C8.02505 14.2583 8.24172 13.8916 8.47505 13.6833C6.62505 13.475 4.68339 12.7583 4.68339 9.5833C4.68339 8.6583 5.00005 7.91663 5.54172 7.32497C5.45839 7.11663 5.16672 6.24997 5.62505 5.12497C5.62505 5.12497 6.32505 4.89997 7.91672 5.97497C8.57505 5.79163 9.29172 5.69997 10 5.69997C10.7084 5.69997 11.425 5.79163 12.0834 5.97497C13.675 4.89997 14.375 5.12497 14.375 5.12497C14.8334 6.24997 14.5417 7.11663 14.4584 7.32497C15 7.91663 15.3167 8.6583 15.3167 9.5833C15.3167 12.7666 13.3667 13.4666 11.5084 13.675C11.8084 13.9333 12.0834 14.4416 12.0834 15.2166V17.5C12.0834 17.725 12.2167 17.9916 12.6417 17.9166C15.95 16.8 18.3334 13.6833 18.3334 9.99997C18.3334 8.90562 18.1178 7.82198 17.699 6.81094C17.2803 5.79989 16.6664 4.88123 15.8926 4.10741C15.1188 3.33359 14.2001 2.71976 13.1891 2.30097C12.178 1.88218 11.0944 1.66663 10 1.66663Z" fill="#5A6475" />
                                    </svg>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M15.8333 2.5C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333ZM15.4167 15.4167V11C15.4167 10.2795 15.1304 9.5885 14.621 9.07903C14.1115 8.56955 13.4205 8.28333 12.7 8.28333C11.9917 8.28333 11.1667 8.71667 10.7667 9.36667V8.44167H8.44167V15.4167H10.7667V11.3083C10.7667 10.6667 11.2833 10.1417 11.925 10.1417C12.2344 10.1417 12.5312 10.2646 12.75 10.4834C12.9688 10.7022 13.0917 10.9989 13.0917 11.3083V15.4167H15.4167ZM5.73333 7.13333C6.10464 7.13333 6.46073 6.98583 6.72328 6.72328C6.98583 6.46073 7.13333 6.10464 7.13333 5.73333C7.13333 4.95833 6.50833 4.325 5.73333 4.325C5.35982 4.325 5.0016 4.47338 4.73749 4.73749C4.47338 5.0016 4.325 5.35982 4.325 5.73333C4.325 6.50833 4.95833 7.13333 5.73333 7.13333ZM6.89167 15.4167V8.44167H4.58333V15.4167H6.89167Z" fill="#5A6475" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clip-path="url(#clip0_1883_829)">
                                        <path d="M16.9307 4.24315C15.6557 3.66815 14.289 3.24315 12.8599 3.00148C12.8471 2.99904 12.834 3.00061 12.8222 3.00599C12.8104 3.01136 12.8006 3.02027 12.794 3.03148C12.619 3.33898 12.424 3.73981 12.2874 4.05648C10.7716 3.83001 9.23064 3.83001 7.71489 4.05648C7.56267 3.70553 7.39102 3.36334 7.20073 3.03148C7.19428 3.02013 7.18452 3.01102 7.17276 3.00537C7.16099 2.99971 7.14779 2.99777 7.13489 2.99982C5.70656 3.24148 4.3399 3.66648 3.06407 4.24231C3.05309 4.24692 3.04379 4.25477 3.0374 4.26481C0.444078 8.0773 -0.266754 11.7957 0.0824121 15.4673C0.0833837 15.4763 0.0861751 15.485 0.0906162 15.4929C0.0950574 15.5008 0.101055 15.5077 0.108245 15.5131C1.6219 16.6152 3.31018 17.4547 5.1024 17.9965C5.11489 18.0003 5.12826 18.0003 5.14074 17.9964C5.15323 17.9926 5.16426 17.985 5.1724 17.9748C5.5574 17.4581 5.90073 16.9123 6.19406 16.339C6.21156 16.3056 6.1949 16.2656 6.1599 16.2523C5.62157 16.0496 5.09997 15.8049 4.5999 15.5206C4.59091 15.5155 4.58334 15.5082 4.57786 15.4995C4.57239 15.4907 4.56917 15.4807 4.56851 15.4704C4.56785 15.46 4.56976 15.4497 4.57408 15.4403C4.57839 15.4309 4.58498 15.4227 4.59323 15.4165C4.69823 15.339 4.80323 15.2581 4.90323 15.1773C4.91223 15.17 4.92308 15.1654 4.93455 15.1639C4.94603 15.1625 4.95769 15.1642 4.96823 15.169C8.24072 16.639 11.7849 16.639 15.019 15.169C15.0296 15.1639 15.0414 15.162 15.053 15.1633C15.0647 15.1646 15.0757 15.1692 15.0849 15.1765C15.1849 15.2581 15.289 15.339 15.3949 15.4165C15.4032 15.4226 15.4099 15.4307 15.4144 15.44C15.4188 15.4493 15.4209 15.4596 15.4204 15.4699C15.4199 15.4802 15.4168 15.4903 15.4115 15.4991C15.4062 15.508 15.3988 15.5154 15.3899 15.5206C14.8915 15.8073 14.3732 16.0498 13.829 16.2515C13.8207 16.2545 13.8131 16.2593 13.8067 16.2655C13.8003 16.2717 13.7954 16.2792 13.7922 16.2875C13.7889 16.2958 13.7875 16.3047 13.788 16.3135C13.7884 16.3224 13.7908 16.3311 13.7949 16.339C14.0949 16.9115 14.4382 17.4565 14.8157 17.974C14.8236 17.9846 14.8345 17.9925 14.847 17.9967C14.8595 18.0009 14.8731 18.0011 14.8857 17.9973C16.681 17.457 18.372 16.6171 19.8874 15.5131C19.8948 15.508 19.901 15.5013 19.9056 15.4935C19.9102 15.4858 19.913 15.4771 19.914 15.4681C20.3307 11.2232 19.2157 7.5348 16.9565 4.26648C16.951 4.25586 16.9418 4.24758 16.9307 4.24315ZM6.68323 13.2315C5.69823 13.2315 4.88573 12.3407 4.88573 11.2482C4.88573 10.1548 5.6824 9.2648 6.68323 9.2648C7.69156 9.2648 8.49656 10.1623 8.48072 11.2482C8.48072 12.3415 7.68406 13.2315 6.68323 13.2315ZM13.329 13.2315C12.3432 13.2315 11.5315 12.3407 11.5315 11.2482C11.5315 10.1548 12.3274 9.2648 13.329 9.2648C14.3374 9.2648 15.1424 10.1623 15.1265 11.2482C15.1265 12.3415 14.3382 13.2315 13.329 13.2315Z" fill="#5A6475" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1883_829">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <Email/>
                        <text className='footer-container-row-content2-text'>© 2023 Mode UI  Inc. All Rights Reserved.</text>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Footer