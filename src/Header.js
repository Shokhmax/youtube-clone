import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';

function Header() {
    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon />
                <Link to="/">
                <img
                    className="header_logo"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUUAAACbCAMAAADC6XmEAAAA81BMVEX////+AAAoKCgAAAD7AAAZGRkdHR0WFhYjIyOdnZ3q6uoICAglJSXHx8f8//8QEBCQkJBJSUni4uKoqKiAgIDS0tI1NTX/9fOUlJT5+fnZ2dlUVFR5eXnt7e29vb1OTk4tLS0/Pz9ra2uvr69gYGCGhoY7OzvKysqamppZWVlzc3NoaGj/6ez/lJT9amn+m5v8zMn+fnv82Nr9xMP5tLD2pKT/mpr8X175cHL94OH6//n/v7v6oaL4h4n9aWH6UEv6Mzf8Iyf8P0H5i4H7LS352tL25uH4ExP+V1b8PDz/r6j3z8v99+7wKyH5fYD2cWn3rLVRog5UAAAMzElEQVR4nO2cC1vaSBfHA4EkkjgRFDFUUEGrYr1VLWpxrbbqtu7a/f6f5k0yc87kBiShwfb1/J991jLkMvNjLmfOnBlFIZFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUikQsUC/3Tl/19hLPkK0kQxdn0taDGRQPAyiPlVkEvBihdMJZwBMfmXOa0Prj6enJ19Pr8Yffp06On0yNNw6P+5vLlxkz4dH48uPp+dnXy8cq9vtbymDnX17VVXply7Zb6+Ovk8uvlrePvlrsJVKpUqJfxnVBW8yvvPvfDu2/1w+PP4v7OPrTdZR5lz9vVLSbJDQhxiAkKJshS71P1zd3Tx4Y1xZOzHN16hShOJjaHIuQFD+UO8fGB/wgBee7/BVV+Y4SmMPd6WssJLB/j8D4Co1FSLy16a4Sns4Sl7FUyJ8et1+F399RWu9WYweWEFkhv5ytCA5yZpvTvx3ppa5qrmpui2ucenQhDy/uEw3Dl2VY3LDOV4s8pTq3YnXzGa8NwkqZPp/AKKLsb7QpqzAFk5CU1uaprIsbEdLIedlJpFTSCRpCl0fkldPJ48Bs9K8S5cGd8ZPMfWpiMTu0DRXs5ZjNem2LorsCp6/e1FCOOeDsACHeNSVSSa7ZzFeG2K5wUy9HUfqotNEyj2ZeI+VNBy3mK8MkVlWDDEUukxiNHZtHiWtYFMs0RadSdvKV6ZYquoARoVMRoHYnyx6pjUhmLYk02SCWqquu1L1xCeIZLs4sfoq6IhulOY0Av7MJJoNUhaFkmWltPOcUmsLQitoxVwAEl7i5PvnZ3ieYEDtNBtqC5ins1dSIKCG/t5SxHQLnS8etr53C+geFw4xco3J/TGLdEJ6nsiwYEUe5Z5LGjxNSheFl4VS5XH0Bt3hFmj9aAU0AbNZjx/mfUqFO+Lr4uV58RiWoZI6ELCqhPPX2a9BkX2lI7iDKgrlbPQKx3RfsuqGF7WhCGurecsREivQdFJN/2b4qmdoovwO7eFjW0Ku+Zd5PNsmj9FpnxI6RN7ym9WVko34bcuiLqn80yjHa7mtnOCeg2Kz+naauXp8aXiebpyUTwNvxWMbGHYtEWxjY3AJXuDuqVp5Y31fi14q9OogQABCByTMYp4T6OT/JAIxc7yQVkz6kvxKX2nu7O96l5XH+ztBrpwppykJXHNrv7O164rpWE4M2DZCLcO2Nw61oT+lqpr3qzQMjTbPggUp63qXDbMuE1bpKiNMRSXVXGJKuaXTXiIuZVAccGwDcuyjKoa6aZr65qpeV+5udLV1WXkyJSztCRa7tWfv+WjeBtZNwArW20HP4Gd09k3Yfzhg07AXYZzRWtVpBg4Vo2lCJMl+Jlwzm3UYxSdA7jdzdBBMNN9rVoOyDLfyep4kZJEpaVwX2Qpc8OuVO7CEJWuyDZ367wP1Uyls6qVw7LUNaQIZZQU4arpFKtTKa4p++C48x8Z8HYuq6Gf1ru6DhjZKAtF9/oPp5nXCd2rI3WxIwqqrXgfRBnACN+IQvSKA6N3wRQXluBa/hINq9tugs/IXoFvD7NRvL5mz7cZm3WcolI3ZCmg1MLfuGDHsysd48VSNPbxaaE8KXLa6vlAUcKnzNhpNop+FMX5U8bqWInGSYCdbXRkIU1/wHSwnzNM3cTmBTPsYimW3YfpqiobNS4DdfEWc3PThHdWVwTFn1kpejc5hxl7RidSGcHhbe8qSo+3YGHnYJGNeltxsIFZ7+dCsWzpS+22bNaWJdrAhgF3uG+pwSfxNVOO8lBU2ONReoyViLfbq3GiXXijr2grws0NGRRQwKULqzQFU7SqvidyDWujyl/bgARuVTTQq8y/Zjko8qiyk+8ZrMcoReWAF14bKDWRQdX3NsJQA2MNrtLoa/OgaPJBuYMPNXnHCJ5lixuYYFbAkmU+irxG/nhKbfJcRSn2TcgVFIkPh+DewX4dHdfheU4xFPGh20b4FmgS4C/ZCX9mt7kpKqx1k7YufoxShCaiO2JSLfrx2JIqLl+XneIp4jwal3sNvsRWt8IXgCcAnPP3eSn6IK+GPOBu2u0PsdAxYeuoDTFz0Xnb6GE/KJjgKgp3o82JYj8cq+FEgw4gCsHY4hxmo8jY2bc0veNzjKKodOaiMNEENTDLrE3hOVhCis05UlxE22AjdAH0M/C9tck/f5+Boqtrxi7u8lAUZdV2eEctum10kqHbew2aOF9knRPFNrRoa8vLh4xEEHOoXXikybP9ZRaKzLMDz76koBgLY3RglYD/0bj9WgMm1vsoRc5kThTRsuG/JoYRgR+5CQmqj2GmFu0N1G7POL1brMQpymGQ54avGDeAWZxidW2OFHE9zbK8nmUZoCJFeIfKP8/WL7ZeUo0uSRRD82We2UDu4hS1V6FY1lJQZPktHW8iOHryv5t+e8zScXkEKYLFMIHiXOtiB2fzPsWFKRSVv3JSZO7w/CW/1e0q6ByBAk+qiyvzpGhNoRjqF2eYu3BTMSXF2AxQCViCZZie/v4Uq0tdXwuQK1EX83gjrrNMW7g3ImHDRl82aTC7fnuKZY0HoeHagegXc3jGXIznKWzE4N2tBIo16cbD5fzfnmJUgmJmL6170/N9xrXASuLmoXfYMeJy/h9KMeuKgTuoXP3MuiwdXzHwtYR5q8Li8p9JUVGyrV55bu7Mm9zcqxMpYmFkVO1vT9GI7qThdSvbSio7vxu7QXUCxackiJKI8e5PoWhsr4fl+5KZ8jk1Rbdve77NF2Fyn1gXM1LcmSNFZ5y9mBjanD7CpOKwx5+/KMIkF8XXmUePsbqjFJ/TUvxnlDf6rlI5TXp3EkXpkXptiuChS/ZGRDE+pkTz9G/+yLvK17QUpS8lTnFvjhSlZ8wPJ+hPqYuslTIKdKZdbqO0FDvQHcW9tHxJYe5eWj8WBx+JFDsdR8Y6sfQRyfljaaMRyRMoOqu4YiAyKZezFudIEd2ylp+1+K6mLX21vrHfG8BesXlExz+kpSjXXQxhiO/gukt7jhTl6pUffIer5Bi3s+WHMRpVsT6tHBW/a6hylZpibA2wB5TMzuwUMQp0GkUMjuAzfAweqooQQGgzsMqvfCpyXy+HeJe8ASOJInaDsDELmzgP1Am4MJy0FOWWuZW0FGEVHJZOIZZME78DZMOAWdd58RRvEyEmUsTYCLExCyIdIeJExn7A3Fs6qcZRxGdC4DheEaWoCYodNBd53AtudIKcwkoqxpQ9FN+gT5MPMkmiiD2QaCvYGkWPhEutMFyuTKcoAzj5Zs0OxiLG4nRs7i3ekf5E/lvh3kKxRQc8zLgTeQ47e3+kpyhjxvy21EBoUPXquNa61fEC1qWrdyxFHGF5oZtbWNPiMWPWckfpyIU1aLGRTd34Chyz2bBwig8ZKGLlK9u95aUyMMOmI9cZjM3etqGVLRzEx1GU9bes1wd10yhrGI0YoVi2bKtelr+MDgHlWOWr9bW9A7xAhx06bFQ0xS9jzndKpOjIRS1Nr+K/VdhnGVxn0Nyh09oCW2gsRWU7sPHcA6itCwdxUiytZQVW1eCZMmKxbFWr2DfreLQAaz0VPL6MWORkokkUlX7S0QVVPB0BhxsoZxeojafYt0O3WLYD8bvRyLteODJfk1s1dhIctZYV2NF0U+xJMJ5PLQNFZRAPjzcMaSuthIpj99BuGU9RxooL8DDmRii6086tUMQGGK3eM2L7R8qWKmfVjDnZlqKyUjwfd2LbGIpKL7qzxH4f+M07m4GCmtvSozqeooxt98u+gMZPhKLb+TY2A1uD1MApK+7IHvl1teAhF24ZH4qcvryMPa+tDYda6RvhL5bLpqw9hm7vhKz2xqotJg4a35L2np+uhRThseqefKIJR37Yhld2cZ6WDjvYxA0u305PFV4xTQ2fkOTs6Lohc2X2QhsUvZ1paSI5c8htzj/Hn8HYGMBhatGtoJ3+tmGafOl3Yy16fpuzU/a+M40BH3LW+EFtA1Gq9iDhjLb2tu7fs7rGTcb14Is74o6Bby3u9jTTlTaI7aas7b3TvWyZpr6xFD9Vjj2k9OxkpniY90RQp9HsdruL7cTJo9Nwv0v+aqw6zX53Md2Beu67d8c83Wm72Womf+kt7XHjO5nleMSxgSn0cfj81k4DffxveCdA4pGe8lhVKYAX/0IeT+vp6fvXhzfGUJxo/Hhyfnz682//bN9SCbHgMb+iqgHKcJ0UV3+7H17e/Dj5+M+bPIOaecckc5rK9T+t1tXH57PPFxej0ej48Obl5dTV5eXp5ZF3zvTw6NKVm/L15ebmk3vJ6OL87OT5qtXiq9a+bXP95hCSSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQi/V/qf3OfVE34DA5SAAAAAElFTkSuQmCC"
                    alt="YouTubeLogo"
                />
                </Link>
            </div>
            <div className="header_input">
                <input
                    onChange={e => setInputSearch(e.target.value)}
                    value={inputSearch}
                    placeholder="Search"
                    type="text"
                />
                <Link to={`/search/${inputSearch}`}>
                <SearchIcon className="header_inputButton" />
                </Link>
            </div>
            <div className="header_icons">
                <VideoCallIcon className="header-icon" />
                <AppsIcon className="header-icon" />
                <NotificationsIcon className="header-icon" />
                <PersonIcon fontSize="large" />
            </div>
        </div>
    )
}

export default Header;
