import React from 'react'
import News from '../../components/news/News'

const News_page = () => {
    return (
        <div>
            <News exact pageSize={2} key="general" country={"in"} category={"general"} />
            <News exact pageSize={2} key="technology" country={"in"} category={"technology"} />
            <News exact pageSize={2} key="business" country={"in"} category={"business"} />
            <News exact pageSize={2} key="science" country={"in"} category={"science"} />
            <News exact pageSize={2} key="health" country={"in"} category={"health"} />
            <News exact pageSize={2} key="sports" country={"in"} category={"sports"} />
        </div>
    )
}

export default News_page