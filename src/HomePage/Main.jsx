import React from 'react'
import DHomePage from './HomePage/DHomePage'
import DNavbar from './Navbar/DNavbar'
import DHoliday from './HolidayEasily/DHoliday'
import DExperience from './Experience/DExperience'
import DRating from './Rating/DRating'
import DFooter from './Footer/DFooter'

const Main = () => {
    return (
        <>
            <DNavbar />
            <DHomePage />
            <DHoliday />
            <DExperience />
            <DRating />
            <DFooter />
        </>
    )
}

export default Main