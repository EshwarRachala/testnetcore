import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-content',
    template: `<test-chart></test-chart>`
})
export class ContentComponent implements OnInit {
    ngOnInit(): void {
    }
}