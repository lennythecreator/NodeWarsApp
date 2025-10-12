"use server"
export const setPlayer = async (playerData:{coderTag: string, playerCode: string}) => {
    const BASEURL = process.env.NEXT_PUBLIC_BASE_URL
    console.log(BASEURL);

    const response = await fetch(`${BASEURL}/CreatePlayer`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            coderTag: playerData.coderTag,
            playerCode: playerData.playerCode
        })
    })

    const data = await response.json()
    return data

    
}