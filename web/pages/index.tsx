interface HomeProps {
  count: number
}

export default function Home(props: HomeProps) {
  return (
    <div>
      <h1>Hello Brasil</h1>
      <h2>contagem: {props.count} </h2>
    </div>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json()

  return {
    props: {
      count: data.count
    }
  }
}
