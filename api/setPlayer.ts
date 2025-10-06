require('dotenv').config()
const BASEURL = process.env.NEXT_PUBLIC_BASE_URL
export const setPlayer = async (coderTag: string, playerCode: string) => {
    const response = await fetch(`${BASEURL}/CreatePlayer`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            coderTag: coderTag,
            playerCode: playerCode
        })
    })

    const data = await response.json()
    return data

    
}