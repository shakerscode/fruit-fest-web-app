import { PlusIcon } from '@heroicons/react/solid'
import './ManageInv.css'
import ManageFruit from '../ManageFruit/ManageFruit';
import { useNavigate } from 'react-router-dom';
import useFruits from '../hooks/useFruits';
import Loading from '../Shared/Loading/Loading';

const ManageInv = () => {
    const navigate = useNavigate();
    const [fruits, setFruits] = useFruits();


    //handle delete
    const handleItemDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this item?');
        if (proceed) {
            const url = `https://agile-fortress-99835.herokuapp.com/fruit/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remain = fruits.filter(fruit => fruit._id !== id);
                    setFruits(remain)
                })
        }

    }
    return (
        <div className='manage-inventory'>
            <div className="manage-header">
                <div >
                    <h1 className='manage-heading'>Manage Inventory</h1>
                </div>
                <div className='add-new-btn'>
                    <button onClick={() => navigate('/add-item')} className='btn'>Add New <PlusIcon className='plus-icon'></PlusIcon></button>
                </div>
            </div>

            <div className='manage-fruits'>
                {
                    fruits.length === 0 && <Loading></Loading>
                }
                {
                    fruits.map(fruit => <ManageFruit key={fruit._id} fruit={fruit} handleItemDelete={handleItemDelete}></ManageFruit>)
                }
            </div>

        </div>
    );
};

export default ManageInv;