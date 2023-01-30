
import React from 'react'
import memesData from '../memesData'

function Meme() {

    // const [memeImage, setMemeImage] = React.useState('')
    const [meme, setMeme] = React.useState({
        topText : '',
        bottomText : '',
        randomImage : 'http://i.imgflip.com/1bij.jpg'
    })
    
    const [allMemeImages, setAllMemeImages] = React.useState([])

    // function getImage() {
    //     const n = Math.floor(Math.random()*allMemeImages.length)
    //     const url = allMemeImages[n].url
    //     setMeme(prevMeme => {
    //         return {
    //             ...prevMeme,
    //             randomImage : url,

    //         }
    //     })
    // }

    // React.useEffect(async ()=>{
    //     try {
    //         const res = await fetch("https://api.imgflip.com/get_memes")
    //         const obj = await res.json()
    //         setAllMemeImages(obj.data.memes)
    //     } catch (error) {
            
    //     }
    
    // },[])

    React.useEffect(() => {
        async function fetchData(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemeImages(data.data.memes)
        }

        fetchData()
    }, [])

    function changeHandler(event) {
        const {value, type, name} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name] : value

            }
        })
    }

    function submitHandler(event) {
        event.preventDefault()

        const n = Math.floor(Math.random()*allMemeImages.length)
        const url = allMemeImages[n].url
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage : url,

            }
        })
    }
  return (
    <div className='meme-generation'>

        <form onSubmit={submitHandler} className='form'>
            <div className='input'>
            <input
             type='text' 
             placeholder='Top text' 
             className='input1'
             value={meme.topText}
             name='topText'
             onChange={changeHandler}
             />

            <input
            type='text' 
            placeholder='Bottom text' 
            className='input2'
            value={meme.bottomText}
            name='bottomText'
            onChange={changeHandler}
            />

            </div>
            <button type='submit' className='get-meme-button'>Get new meme image</button>
        </form>

        <div className='meme'>
            <img src={meme.randomImage} className='meme-image'/>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
    </div>
  )
}

export default Meme