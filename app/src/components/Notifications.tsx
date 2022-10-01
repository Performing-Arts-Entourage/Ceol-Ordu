import { faBell } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Properties {

}

export const Notifications = ({ }: Properties) => {
    return (
        <button
            type="button"
            className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
            <span className="sr-only">View notifications</span>

            <FontAwesomeIcon icon={faBell} size="lg" />
        </button>
    );
};
