

const Link = ({item}) => {
  return (
    <li>
      <a target="_blank" href={item.link}>
        {item.name}
      </a>
    </li>
  );
};

export default Link;
