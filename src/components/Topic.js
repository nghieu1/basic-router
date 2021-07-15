
const Topic = (props) =>  {
    return (
    <div>
        <h3>
        {props.match.params.topicId}
        </h3>
    </div>
    )
}
export default Topic