import { UserInfo } from './UserInfo';
import { Navigation } from './Navigation';

export function Header() {
    return (
        <header>
            <img src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture.png" alt="Aperture science" className="logo" />

            <UserInfo />

            <Navigation />

        </header>
    );
};