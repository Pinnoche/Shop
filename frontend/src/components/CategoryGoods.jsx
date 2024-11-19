import Category from './Category';
import phone from "../img/photo.jpg"

function CategoryGoods() {
  const deals = [
    {
      image: '',
      title: 'Microwaves',
    },
    {
      image: phone,
      title: 'Washing Machines',
    },
    {
      image: '',
      title: 'Freezers',
    },
    {
      image: '',
      title: 'Fans',
    },
    {
      image: '',
      title: 'Cookers',
    },
    {
      image: '',
      title: 'Air Conditioners',
    },
  ];

  return <Category deals={deals} />;
}

export default CategoryGoods;
