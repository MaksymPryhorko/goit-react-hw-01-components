import user from './components/Painting/user.json';
import statisticalData from './components/Statistics/statistical-data.json';
import friends from './components/Friends/friends.json';
import transactions from './components/TransactionHistory/transactions.json';
import Painting from './components/Painting/Painting';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/Friends/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <div>
      <Painting
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistics stats={statisticalData} title="Upload Stats" />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}
