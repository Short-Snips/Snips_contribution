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
            if(ev2 in Object.keys(indexes.tags))
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
