import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
 
type Joke = {
  id: string
  joke: string
  status: number
}
 
export const getServerSideProps: GetServerSideProps<{
  joke: Joke
}> = async () => {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      accept: 'application/json'
    }
  })
  const joke = await res.json()
  return { props: { joke } }
}
 
export default function Page({
  joke,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return joke.joke
}