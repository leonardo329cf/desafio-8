import "./styles.css";

type Props = {
    rowKey: string;
    rowValue: string;
}

const InfoRow = ({ rowKey, rowValue } : Props) => {
    return (
        <div className='info-rows'>
          <p className="key-text">{rowKey}:&nbsp;</p>
          <p className="value-text">{rowValue}</p>
        </div>
    );
}

export default InfoRow;