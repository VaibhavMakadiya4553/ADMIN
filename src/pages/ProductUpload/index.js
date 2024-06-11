import Breadcrumbs  from "@mui/material/Breadcrumbs";
import { Category, Home } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { emphasize, styled } from "@mui/material/styles";
import Chip  from "@mui/material/Chip";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import React from "react";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { FaCloudUploadAlt } from "react-icons/fa";


// breadcrumb code

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
    
        return {
            backgroundColor,
            height: theme.spacing(3),
            color: theme.palette.text.primary,
            fontWeight: theme.typography.fontWeightRegular,
            '&:hover , &:focus': {
                backgroundColor : emphasize(backgroundColor, 0.06),
            },
            '&:active' : {
                boxshadow : theme.shadows[1],
                backgroundColor : emphasize(backgroundColor, 0.12),
            },
        };
});
const ProductsUpload = ()=>{

    const [CategoryVal, setcategoryVal] = React.useState('');
    const [ratingsValue, setRatingValue] =React.useState(1);
    const handleChangeCategory = (event) => {
        setcategoryVal(event.target.value);
    };
    return(
        <>
            <div className="right-content w-100">
                <div className="card shadow border-0 w-100 flex-row p-4">
                    <h5 className="mb-0">Products Upload</h5>
                    <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
                        <StyledBreadcrumb 
                            component="a"
                            href="#"
                            label="Dashboard"
                            icon={<Home fontSiz="small"/>}
                        />
                        <StyledBreadcrumb 
                            component="a"
                            label="products"
                            href="#"
                            deleteIcon={<ExpandMoreIcon/>}
                        />
                        <StyledBreadcrumb 
                            label="products Upload"
                            deleteIcon={<ExpandMoreIcon/>}
                        />
                    </Breadcrumbs>
                </div>
                <form className='form'>
                    <div className='row'>
                        <div className='col-sm-9'>
                            <div className='card p-4'>
                                <h5 className='mb-4'>Basic Informathion</h5>

                                <div className='form-group'>
                                    <h6>TITLE</h6>
                                    <input type='text'/>
                                </div>
                                <div className='form-group'>
                                    <h6>DESCRIPTION</h6>
                                    <textarea rows={5} cols={10}/>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <h6>CATEGORY</h6>
                                        <div className='form-group'>
                                            <Select
                                                value={CategoryVal}
                                                onChange={handleChangeCategory}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                className='w-100'
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className='form-group'>
                                            <h6>BRAND</h6>
                                        
                                            <Select
                                                value={CategoryVal}
                                                onChange={handleChangeCategory}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                className='w-100'
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                         </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className='form-group'>
                                                <h6>REGULAR PRICE</h6>
                                                <input type='text' />
                                            </div>
                                        </div>

                                        <div className='col'>
                                            <div className='form-group'>
                                                <h6>DISCOUNT PRICE</h6>
                                                <input type='text' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col'>
                                            <div className='form-group'>
                                                <h6>RATING</h6>
                                                <Rating
                                                    name="simple-controlled"
                                                    value={ratingsValue}
                                                    onChange={(event, newValue) => {
                                                        setRatingValue(newValue);
                                                    }}
                                                />
                                           </div>
                                        </div>

                                        <div className='col'>
                                            <div className='form-group mt-10'>
                                                <h6>PRODUCT STOCK</h6>
                                                <input type='text' />
                                            </div>
                                        </div>
                                    </div>

                                    <br/>

                                    <Button className="btn-blue btn-lg btn-big"><FaCloudUploadAlt/> &nbsp; PUBLISH AND VIEW</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                
            </div>
        </>
    )
}
export default ProductsUpload;