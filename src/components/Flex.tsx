import React from 'react'

function Flex() {
    return (
        <div className='border-4 border-black m-8 p-8 flex items-center justify-center'>

            <div className='w-[250px]'>
                <h1 className='text-2xl'>Vaaaai Corinthians</h1>
                <p>Melhor time do Mundo!</p>
            </div>
            
            <div className='w-[250px]'>
                <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/874.png" alt="FOTO CORINTHIANS" />
            </div>

        </div>
    )
}

export default Flex
