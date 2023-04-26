

export const Statistics = ({ good=0,neutral=0,bad=0,total=0,positivePersentage=0}) => {
    return (
        <ul>
            <li>Good:{good}</li>
            <li>Neutral:{neutral}</li>
            <li>Bad:{bad}</li>
            <li>Total:{total}</li>
            <li>PositivePersentage:{positivePersentage}</li>
        </ul>
    )
}