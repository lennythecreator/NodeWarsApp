const getPlayer = async (coderTag: string, playerCode: string) => {
    const response = await fetch('/api/GetPlayer', {
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