import { Pipe, PipeTransform } from "@angular/core";

@Pipe( {
    name: "filter",
    pure: false, // Careful with this as it impairs performance massively if the list is long!
} )
export class FilterPipe
    implements PipeTransform {
    
    transform( value: any, filterString: string, propName: string ): any {
        const resultArray = [];
        
        if ( value.length === 0 || filterString === "" ) {
            return value;
        }
        
        for ( const item of value ) {
            if ( item[ propName ] === filterString ) {
                resultArray.push( item );
            }
        }
        
        return resultArray;
    }
    
}
