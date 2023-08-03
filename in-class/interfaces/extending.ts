interface HumanAddress {
    firstName: string
    lastName: string
    zip: number
  }
  
  type Post = {
    title: string,
    body: string
  }
  
  interface Poster extends HumanAddress {
    posts: Post[]
    lastPost: Date
  }
  
  const poster: Poster = {
    firstName: 'sean',
    lastName: 'currie',
    zip: 61031,
    posts: [
      {
        title: '', 
        body: ''
      },
      {
        title: '', 
        body: ''
      }
    ],
    lastPost: new Date()
  }