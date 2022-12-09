import React from 'react'
import "./Home.scss"
import { Link } from "react-router-dom"
import lamp from "../imgs/lamp.png"
import { motion } from "framer-motion"

const Home = () => {
    return (
        <motion.div className="home"
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <div className="intro">
                <h1>Quiz App</h1>
                <img src={lamp} alt="logo" />
            </div>
            <Link to="/QuizInfo"><button>begin</button></Link>
        </motion.div>
    )
}

export default Home