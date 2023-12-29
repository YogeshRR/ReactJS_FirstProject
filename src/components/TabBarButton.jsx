export default function TabBarButton({ children, onSelect }) {

    return (<button onClick={onSelect}>{children}</button>);
}