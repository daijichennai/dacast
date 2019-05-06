import { NgModule } from '@angular/core';
import { DacastPipe } from './dacast/dacast';
@NgModule({
	declarations: [DacastPipe,
    DacastPipe],
	imports: [],
	exports: [DacastPipe,
    DacastPipe]
})
export class PipesModule {}
