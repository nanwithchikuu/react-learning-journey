function Hello() {

  let myName = 'amit';
  let number = 456;
  let fullName = () => {
    return 'amit pal'
  }
  return <h1>
    message number:{number}  I am your master {fullName()}
  </h1>
}
export default Hello;