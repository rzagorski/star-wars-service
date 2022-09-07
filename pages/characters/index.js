import Link from "next/link"

export const getStaticProps = async () => {
    const res = await fetch('https://www.swapi.tech/api/people/')
    const data = await res.json()

    return {
        props: {
            characters: data.results
        }
    }
}

// /characters/[id]

const Characters = ({ characters }) => {
    return ( 
        <div>
            <h1>Characters list</h1>
            {characters.map(character => (
                <Link href={'/characters/' + character.uid} key={character.uid}>
                    <h3>{character.name}</h3> 
                </Link>
            ))}
        </div>
     );
}
 
export default Characters;