import { Link } from 'react-router-dom'
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg'
import Slider from '../components/Slider'

function Explore() {
    return (
        <div className='explore'>
            <header>
                <p className="pageHeader">Explore</p>
            </header>
            <main>
                {/* SLIDER STARTS HERE */}
                <Slider />
                {/* SLIDER ENDS HERE */}
                <p className="exploreCategoryHeading">Categories</p>
                <div className="exploreCategories">
                    <Link to='category/rent'>
                        <img
                            src={ rentCategoryImage }
                            className='exploreCategoryImg'
                            alt='rent'
                        />
                        <p className="exploreCategortyName">Places for rent</p>
                    </Link>
                    <Link to='category/sale'>
                        <img
                            src={ sellCategoryImage }
                            className='exploreCategoryImg'
                            alt='sell'
                        />
                        <p className="exploreCategortyName">Places for sale</p>
                    </Link>
                </div>
            </main>
        </div>
    )
}

export default Explore
