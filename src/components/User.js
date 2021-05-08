import './user.style.css'

export default function User({item}) {

    return (
        <div className={'wrapper'}>
            <div className={'user-info-box'}>
                {item.name.first} {item.name.last}
            </div>
            <div className={'user-image'}>
                <img src={item.picture.large} alt=""/>
            </div>
        </div>
    );
}