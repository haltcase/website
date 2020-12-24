import { GetServerSideProps } from "next"

const baseUrl = "https://github.com/citycide"

export const getServerSideProps: GetServerSideProps = async ({ params, res }) => {
  const location = (params == null || params.project == null)
    ? baseUrl
    : `${baseUrl}/${String(params.project)}`

  res.writeHead(301, {
    Location: location
  })

  res.end()

  return {
    props: {}
  }
}

export default (): null => {
  return null
}
