import React, { useState } from "react";
import HomeMobileNavBar from "../../../home/component/patient/HomeMobileNavBar";
import HomeNavBar from "../../../home/component/patient/HomeNavBar";
import HomeSideBar from "../../../home/component/patient/HomeSideBar.ls";
import EnterNewPassword from "../components/enterNewPassword";
import NewPasswordSuccess from "../components/newPasswordSucces";
import EnterPassword from "../components/enterPassword";

const ManagePassword: React.FC = () => {
    const [presentPage, setPresentPage] = useState(1);
    const [password, setPassword] = useState('')
    const nextPage = () => {
        if (presentPage < 4) {
            setPresentPage(presentPage + 1);
        }
    }

    return (
        <div className="w-full  relative  h-dvh bg-gray-100 overflow-x-hidden overflow-y-auto flex  cursor-default overflow-hidden">
            <div className="md:w-[25vw] hidden md:block ">
                <HomeSideBar />

            </div>
            <div className="md:w-[75vw] w-full overflow-y-auto">
                <HomeMobileNavBar title="Manage Password" onSearchFired={() => { }} />
                <HomeNavBar title="Manage Password" onSearchFired={() => { }} />

                {presentPage === 2 && <EnterNewPassword passwordEnteredEarlier={password} forwardFunction={nextPage} />}
                {presentPage === 3 && <NewPasswordSuccess setPage={setPresentPage} />}
                {presentPage === 1 && <EnterPassword forwardFunction={(e) => {
                    setPassword(e)
                    nextPage()
                }} />}

            </div>
        </div>
    )
}

export default ManagePassword;