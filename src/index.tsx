import React from 'react'
import ReactDOM from 'react-dom/client'
import Title from './Title'

const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Blanditiis aliquam quae nulla ipsa nesciunt hic fuga quaerat
                ullam veritatis? Dignissimos repudiandae officia obcaecati,
                corrupti hic error dolor inventore nesciunt velit?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                consequuntur, reprehenderit temporibus qui eum maxime
                repellendus eius animi quaerat possimus non molestiae
                exercitationem harum sequi suscipit laborum omnis eaque fugit.
            </p>
        </React.Fragment>
    )
}

const App = () => {
    return (
        <>
            <Title title="React" year={2023} />
            <Title title="App" year={2022} />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
