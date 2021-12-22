import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import {
  Navbar,
  Exchanges,
  HomePage,
  Cryptocurrentcies,
  CryptoDetail,
  News
} from './components'
import './App.css'
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout style={{ minHeight: '100vh' }}>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<HomePage />}></Route>

              <Route exact path="/exchanges" element={<Exchanges />}></Route>
              <Route
                exact
                path="/cryptocurrentcies"
                element={<Cryptocurrentcies />}
              ></Route>
              <Route
                exact
                path="/crypto/:coinId"
                element={<CryptoDetail />}
              ></Route>
              <Route exact path="/news" element={<News />}></Route>
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: 'white', textAlign: 'center' }}
          >
            Cryptoverse <br />
            All rights reserverd
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default App
