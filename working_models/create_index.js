export default function Create_index(Articles,tags)
{

    let indexes={
        uuid:{},
        title:{},
        tags:{}      
    }

    Articles.forEach(ev=>{

        
        indexes.uuid[ev.uuid]=ev
        indexes.title[ev.title]=ev
        ev.tags.forEach(ev2=>{
            if(Object.keys(indexes.tags).includes(ev2))
            {
                indexes.tags[ev2].push(ev)
            }else {
                indexes.tags[ev2]=[ev]
            }
        })

    })
    // console.log(indexes)
    return indexes
}
