import { Link } from "react-router-dom";

export default function CategoryCard(props: props) {
    return (
        <Link to={props.link}>
            <div className="p-6 py-8 max-w-sm mx-auto bg-gray-50 rounded-xl shadow-lg flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <img className="h-20 w-20" src={props.image} alt={props.title} />
                </div>
                <div>
                    <div className="text-xl font-roboto text-black">{props.title}</div>
                </div>
            </div>
        </Link>
    );
}

type props = {
    title: string;
    image: string;
    link: string;
}

