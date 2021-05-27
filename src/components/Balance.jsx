import React from 'react'
import { ResponsiveContainer ,LineChart, Line, Area, AreaChart, Tooltip, CartesianGrid, XAxis, YAxis } from 'recharts';



export const BalanceTotal = () => {
    const data = [
        {
            // individual datum
            label: 'Compra online', // amount value
            Amount: 20,
            Balance: 123, // balance value
        },
        {
            label: 'Compra online 2', // amount value
            Amount: 23,
            Balance: 100, // balance value
        },
        {
            label: 'Compra online 3', // amount value
            Amount: -40,
            Balance: 83, // balance value
        },
    ]
    
    
    return (
        <div>   
            <AreaChart width={300} height={200} data={data}
                margin={{ top: 30, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3f9780" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="Balance" stroke="#473fd8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="Amount" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                
            </AreaChart>
        </div>
    )
};