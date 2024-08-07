import React from 'react'

function Grid() {
    return (
        <div className='grid grid-cols-12'>

            <div className='col-span-1 bg-blue-500 h-screen'>
                Servidores
            </div>

            <div className='col-span-3 bg-green-300 h-screen'>
                Canais
            </div>

            <div className='col-span-6 bg-gray-500 h-screen'>
                Feed
            </div>

            <div className='col-span-2 bg-yellow-50 h-screen'>
                Participantes
            </div>
        </div>
    )
}

export default Grid
