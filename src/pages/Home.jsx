import { styles } from "../utils/style";

export function Home() {
    return (
        <div className={`${styles.flexible}  ${styles.generalSize} bg-red-400`}>
            <h1 className="text-5xl">Home Page</h1>
        </div>
    )
}