import React from "react";

class Book extends React.Component{

    checkShelf = (i) => i.shelf = (i.shelf ==='undefined') ? (i.shelf === i.target.value) : (i.shelf)

    checkValue = (i) => i.shelf !== undefined ? i.shelf : 'none'
    
    handleEvent = (e) => {
        this.props.changeShelf(this.props.bookItem, e.target.value);
    }

    findShelf = () => this.props.bookItem.shelf

    render() {
        let checkThumbnail = this.props.bookItem.imageLinks ? this.props.bookItem.imageLinks.thumbnail : ''
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: `url(${checkThumbnail})`}}></div>
                        <div className="book-shelf-changer">
                            <select value = {this.checkValue(this.props.bookItem)} onChange = { (e) => {this.checkShelf(this.props.bookItem);
                                this.handleEvent(e);}
                            }>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                <div className="book-title">{this.props.bookItem.title}</div>
                <div className="book-authors">{this.props.bookItem.authors}</div>
            </div>
        );
    }
}

export default Book