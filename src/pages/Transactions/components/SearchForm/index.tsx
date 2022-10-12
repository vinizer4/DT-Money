import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export function SearchForm() {
    return (
        <SearchFormContainer>
            <input type="text" placeholder="Busque por transações" />
            <button typeof="submit">
                <MagnifyingGlass size={20} />
                    Buscar  
            </button>
        </SearchFormContainer>
    )
}